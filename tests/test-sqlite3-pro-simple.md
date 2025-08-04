# Test: SQLite3-Pro Agent - Query Optimization Task

## Test Scenario
Ask the sqlite3-pro agent to optimize a common TimeZyme query for Cloudflare D1.

## Input Task
```
Optimize this query for TimeZyme's D1 database:

SELECT * FROM zymes 
WHERE tenant_id = ? 
AND created_at > datetime('now', '-30 days')
ORDER BY created_at DESC;

The zymes table has 100k+ rows per tenant. This query runs frequently.
```

## Expected Agent Response Criteria
The agent should:
1. ✅ Recognize this is for Cloudflare D1/SQLite
2. ✅ Suggest adding an index on (tenant_id, created_at)
3. ✅ Recommend selecting specific columns instead of *
4. ✅ Consider D1's 1MB result size limit
5. ✅ Provide Drizzle ORM equivalent code

## Test Execution
To run this test with the sqlite3-pro agent:

```bash
# 1. Invoke the agent with the task
echo "Use the sqlite3-pro agent to optimize this query for TimeZyme's D1 database:

SELECT * FROM zymes 
WHERE tenant_id = ? 
AND created_at > datetime('now', '-30 days')
ORDER BY created_at DESC;

The zymes table has 100k+ rows per tenant. This query runs frequently."
```

## Validation Checklist
- [ ] Agent identifies D1/SQLite context
- [ ] Agent suggests composite index
- [ ] Agent recommends column selection
- [ ] Agent mentions D1 limitations
- [ ] Agent provides Drizzle ORM code
- [ ] No PostgreSQL/MySQL references
- [ ] Uses TimeZyme terminology (tenant_id, zymes)

## Sample Expected Output
```sql
-- Optimized for Cloudflare D1
CREATE INDEX idx_zymes_tenant_created 
ON zymes(tenant_id, created_at DESC);

-- Optimized query
SELECT id, title, content, status, created_at
FROM zymes 
WHERE tenant_id = ? 
AND created_at > datetime('now', '-30 days')
ORDER BY created_at DESC
LIMIT 100; -- D1 result size consideration

-- Drizzle ORM equivalent
const recentZymes = await db
  .select({
    id: zymes.id,
    title: zymes.title,
    content: zymes.content,
    status: zymes.status,
    createdAt: zymes.createdAt
  })
  .from(zymes)
  .where(and(
    eq(zymes.tenantId, tenantId),
    gt(zymes.createdAt, sql`datetime('now', '-30 days')`)
  ))
  .orderBy(desc(zymes.createdAt))
  .limit(100);
```