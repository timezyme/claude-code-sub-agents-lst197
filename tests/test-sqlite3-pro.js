/**
 * Test Suite for sqlite3-pro Agent
 * 
 * This test validates that the sqlite3-pro agent is properly configured
 * for the TimeZyme application and follows all agent standards.
 */

const fs = require('fs');
const path = require('path');

// Test configuration
const AGENT_PATH = '../data-ai/sqlite3-pro.md';
const TIMEZYME_TECH_STACK = {
  database: ['SQLite', 'D1', 'Cloudflare D1', 'better-sqlite3', 'Drizzle ORM', 'drizzle-kit'],
  incompatible: ['PostgreSQL', 'Postgres', 'MySQL', 'MongoDB', 'Firebase', 'Supabase', 'DynamoDB', 'Redis', 'Oracle'],
  cloudPlatforms: ['Cloudflare'],
  incompatiblePlatforms: ['AWS', 'Azure', 'GCP', 'Google Cloud', 'Vercel', 'Netlify', 'Heroku']
};

// Color codes for output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

// Helper functions
function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function readAgentFile() {
  const filePath = path.join(__dirname, AGENT_PATH);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Agent file not found: ${filePath}`);
  }
  return fs.readFileSync(filePath, 'utf8');
}

function extractFrontmatter(content) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    throw new Error('No frontmatter found in agent file');
  }
  
  const frontmatter = {};
  const lines = frontmatterMatch[1].split('\n');
  
  for (const line of lines) {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      frontmatter[key.trim()] = valueParts.join(':').trim();
    }
  }
  
  return frontmatter;
}

// Test functions
function testFrontmatter(frontmatter) {
  log('\n📋 Testing Frontmatter...', 'blue');
  let passed = true;
  
  // Check required fields
  const requiredFields = ['name', 'description', 'tools', 'model'];
  for (const field of requiredFields) {
    if (!frontmatter[field]) {
      log(`  ❌ Missing required field: ${field}`, 'red');
      passed = false;
    } else {
      log(`  ✅ Found field: ${field}`, 'green');
    }
  }
  
  // Validate name
  if (frontmatter.name !== 'sqlite3-pro') {
    log(`  ❌ Incorrect name: ${frontmatter.name} (expected: sqlite3-pro)`, 'red');
    passed = false;
  } else {
    log(`  ✅ Correct agent name`, 'green');
  }
  
  // Check model
  if (!['sonnet', 'haiku', 'opus'].includes(frontmatter.model)) {
    log(`  ⚠️  Unusual model: ${frontmatter.model}`, 'yellow');
  } else {
    log(`  ✅ Valid model: ${frontmatter.model}`, 'green');
  }
  
  return passed;
}

function testTimeZymeAlignment(content) {
  log('\n🎯 Testing TimeZyme Technology Alignment...', 'blue');
  let passed = true;
  
  // Check for correct database technologies
  log('  Checking for TimeZyme database technologies:', 'blue');
  for (const tech of TIMEZYME_TECH_STACK.database) {
    if (content.includes(tech)) {
      log(`    ✅ Found: ${tech}`, 'green');
    } else if (tech === 'SQLite' || tech === 'D1' || tech === 'Drizzle') {
      // These are critical and must be present
      log(`    ❌ Missing critical technology: ${tech}`, 'red');
      passed = false;
    }
  }
  
  // Check for incompatible database technologies
  log('  Checking for incompatible technologies:', 'blue');
  for (const tech of TIMEZYME_TECH_STACK.incompatible) {
    if (content.includes(tech)) {
      log(`    ❌ Found incompatible technology: ${tech}`, 'red');
      passed = false;
    }
  }
  
  // Check for incompatible cloud platforms
  for (const platform of TIMEZYME_TECH_STACK.incompatiblePlatforms) {
    if (content.includes(platform) && !content.includes('not AWS') && !content.includes('not PostgreSQL')) {
      log(`    ⚠️  Found reference to incompatible platform: ${platform}`, 'yellow');
      // This is a warning, not a failure, as it might be in a negative context
    }
  }
  
  if (passed) {
    log('  ✅ All technology alignments correct', 'green');
  }
  
  return passed;
}

function testCommunicationProtocol(content) {
  log('\n📡 Testing Communication Protocol...', 'blue');
  let passed = true;
  
  // Check for required communication protocol sections
  const requiredSections = [
    'Communication Protocol',
    'requesting_agent',
    'context-manager',
    'request_type',
    'get_task_briefing'
  ];
  
  for (const section of requiredSections) {
    if (content.includes(section)) {
      log(`  ✅ Found: ${section}`, 'green');
    } else {
      log(`  ❌ Missing: ${section}`, 'red');
      passed = false;
    }
  }
  
  // Check for JSON protocol examples
  if (content.includes('```json')) {
    log('  ✅ Contains JSON protocol examples', 'green');
  } else {
    log('  ⚠️  No JSON protocol examples found', 'yellow');
  }
  
  return passed;
}

function testAgentExpertise(content) {
  log('\n🔧 Testing Agent Expertise Areas...', 'blue');
  let passed = true;
  
  const expectedExpertise = [
    'SQLite',
    'edge database',
    'Drizzle ORM',
    'multi-tenant',
    'tenant_id',
    'Cloudflare',
    'optimization'
  ];
  
  for (const expertise of expectedExpertise) {
    if (content.toLowerCase().includes(expertise.toLowerCase())) {
      log(`  ✅ Found expertise: ${expertise}`, 'green');
    } else {
      log(`  ⚠️  Missing expertise area: ${expertise}`, 'yellow');
    }
  }
  
  // Check for TimeZyme-specific context
  if (content.includes('TimeZyme')) {
    log('  ✅ Contains TimeZyme-specific context', 'green');
  } else {
    log('  ❌ Missing TimeZyme context', 'red');
    passed = false;
  }
  
  return passed;
}

function testMCPIntegration(content) {
  log('\n🔌 Testing MCP Integration...', 'blue');
  let passed = true;
  
  if (content.includes('MCP Integration')) {
    log('  ✅ Has MCP Integration section', 'green');
    
    // Check for specific MCP servers
    const mcpServers = ['context7', 'sequential'];
    for (const server of mcpServers) {
      if (content.includes(server)) {
        log(`  ✅ References MCP server: ${server}`, 'green');
      }
    }
  } else {
    log('  ⚠️  No MCP Integration section found', 'yellow');
  }
  
  return passed;
}

// Main test runner
function runTests() {
  log('\n' + '='.repeat(60), 'blue');
  log('         SQLite3-Pro Agent Test Suite', 'blue');
  log('         TimeZyme Compatibility Validation', 'blue');
  log('='.repeat(60), 'blue');
  
  try {
    const content = readAgentFile();
    log('\n✅ Successfully loaded agent file', 'green');
    
    const frontmatter = extractFrontmatter(content);
    
    // Run all tests
    const results = {
      frontmatter: testFrontmatter(frontmatter),
      alignment: testTimeZymeAlignment(content),
      protocol: testCommunicationProtocol(content),
      expertise: testAgentExpertise(content),
      mcp: testMCPIntegration(content)
    };
    
    // Summary
    log('\n' + '='.repeat(60), 'blue');
    log('                  TEST SUMMARY', 'blue');
    log('='.repeat(60), 'blue');
    
    let totalPassed = 0;
    let totalTests = 0;
    
    for (const [test, passed] of Object.entries(results)) {
      totalTests++;
      if (passed) {
        totalPassed++;
        log(`  ✅ ${test.toUpperCase()}: PASSED`, 'green');
      } else {
        log(`  ❌ ${test.toUpperCase()}: FAILED`, 'red');
      }
    }
    
    log('\n' + '='.repeat(60), 'blue');
    if (totalPassed === totalTests) {
      log(`🎉 ALL TESTS PASSED (${totalPassed}/${totalTests})`, 'green');
      log('The sqlite3-pro agent is fully compatible with TimeZyme!', 'green');
    } else {
      log(`⚠️  SOME TESTS FAILED (${totalPassed}/${totalTests})`, 'yellow');
      log('Please review and fix the issues above.', 'yellow');
    }
    log('='.repeat(60), 'blue');
    
    // Exit with appropriate code
    process.exit(totalPassed === totalTests ? 0 : 1);
    
  } catch (error) {
    log(`\n❌ Error: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Run the tests
runTests();