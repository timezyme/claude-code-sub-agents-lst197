# How to Use: Data Engineer

## Quick Prompts

### ETL/ELT Pipelines
- "Design an ETL pipeline to process daily sales data from multiple sources into our data warehouse"
- "Build ETL pipeline processing customer data from CRM to data warehouse"
- "Create ELT pipeline with dbt for data transformation"
- "Implement incremental data loading strategy"

### Real-Time Streaming
- "Set up real-time data streaming for user activity tracking with Kafka"
- "Implement change data capture from PostgreSQL to Kafka"
- "Build real-time analytics for website clickstream data"
- "Create streaming pipeline for IoT sensor data processing"

### Data Architecture
- "Build an end-to-end analytics platform processing 10TB daily with real-time dashboards"
- "Design and implement data lake architecture on AWS S3"
- "Implement Lambda architecture for real-time and batch data processing"
- "Create data mesh architecture for decentralized data ownership"

### Machine Learning Pipelines
- "Create data pipeline for ML model training with feature store and model serving infrastructure"
- "Build feature engineering pipeline for recommendation system"
- "Implement MLOps pipeline with data versioning and model tracking"
- "Design real-time ML inference pipeline"

### Data Migration
- "Migrate our on-premise data warehouse to cloud with zero downtime"
- "Plan data migration from Oracle to PostgreSQL"
- "Implement CDC-based migration strategy for live systems"
- "Create data validation framework for migration"

### Data Quality
- "Build comprehensive data quality monitoring and alerting system"
- "Implement data lineage tracking across all pipelines"
- "Create data validation framework with quality scores"
- "Design data catalog with automated metadata management"

### Business Intelligence
- "Connect our data pipeline to Tableau for business reporting"
- "Build data marts for specific business domains"
- "Create aggregation tables for dashboard performance"
- "Implement slowly changing dimensions (SCD Type 2)"

### Performance & Optimization
- "Optimize Spark jobs for better performance"
- "Design partitioning strategy for massive datasets"
- "Implement data compression and archival strategy"
- "Optimize query performance in data warehouse"

### Orchestration
- "Set up Apache Airflow for pipeline orchestration"
- "Create idempotent data pipelines with error recovery"
- "Implement pipeline monitoring and alerting"
- "Design disaster recovery for data pipelines"

## Overview
The Data Engineer agent specializes in designing and implementing robust data pipelines, ETL/ELT processes, data warehousing, and real-time streaming architectures for scalable data processing.

## Basic Usage Examples

### Example 1: ETL Pipeline Design
**User Prompt:**
```
"Design an ETL pipeline to process daily sales data from multiple sources into our data warehouse"
```

**Data Engineer Response:**
- Designs extraction strategy for each source
- Implements transformation logic
- Optimizes loading process
- Sets up orchestration and monitoring
- Implements error handling and recovery

### Example 2: Real-Time Streaming
**User Prompt:**
```
"Set up real-time data streaming for user activity tracking with Kafka"
```

**Data Engineer Actions:**
- Configures Kafka topics and partitions
- Implements producers and consumers
- Sets up stream processing with Kafka Streams
- Designs data schema and serialization
- Implements exactly-once semantics

## Multi-Agent Collaborative Scenarios

### Scenario 1: Complete Analytics Platform
**User Prompt:**
```
"Build an end-to-end analytics platform processing 10TB daily with real-time dashboards"
```

**Data Engineer Orchestration:**
```
data-engineer leads:
├── Architecture Design
│   ├── data-engineer: Pipeline architecture
│   ├── database-optimizer: Data warehouse design
│   ├── cloud-architect: Infrastructure planning
│   └── data-scientist: Analytics requirements
├── Data Ingestion Layer
│   ├── data-engineer: Multi-source ingestion
│   │   ├── API connectors
│   │   ├── Database CDC
│   │   ├── File processing
│   │   └── Stream ingestion
│   ├── backend-architect: API design
│   └── security-auditor: Data security
├── Processing Layer
│   ├── data-engineer: ETL/ELT pipelines
│   │   ├── Batch processing (Spark)
│   │   ├── Stream processing (Flink)
│   │   └── Data quality checks
│   ├── ml-engineer: Feature engineering
│   └── database-optimizer: Query optimization
├── Storage Layer
│   ├── data-engineer: Data lake design
│   ├── database-optimizer: Warehouse optimization
│   └── cloud-architect: Storage strategy
└── Consumption Layer
    ├── data-scientist: Analytics queries
    ├── frontend-developer: Dashboard integration
    └── api-documenter: Data API documentation
```

### Scenario 2: Machine Learning Data Pipeline
**User Prompt:**
```
"Create data pipeline for ML model training with feature store and model serving infrastructure"
```

**ML Pipeline Collaboration:**
```
data-engineer coordinates with:
├── Data Collection
│   ├── data-engineer: Raw data ingestion
│   ├── backend-architect: API integration
│   └── database-optimizer: Source optimization
├── Feature Engineering
│   ├── data-engineer: Feature pipeline
│   ├── ml-engineer: Feature design
│   └── data-scientist: Feature validation
├── Feature Store
│   ├── data-engineer: Store implementation
│   │   ├── Online features (Redis)
│   │   ├── Offline features (S3)
│   │   └── Feature versioning
│   └── ml-engineer: Feature serving
├── Training Pipeline
│   ├── data-engineer: Training data prep
│   ├── ml-engineer: Model training
│   └── mlops-engineer: Experiment tracking
└── Model Serving
    ├── data-engineer: Inference pipeline
    ├── backend-architect: Serving API
    └── performance-engineer: Latency optimization
```

### Scenario 3: Data Migration Project
**User Prompt:**
```
"Migrate our on-premise data warehouse to cloud with zero downtime"
```

**Migration Coordination:**
```
data-engineer manages:
├── Assessment Phase
│   ├── data-engineer: Current state analysis
│   ├── database-optimizer: Schema assessment
│   └── cloud-architect: Target architecture
├── Migration Planning
│   ├── data-engineer: Migration strategy
│   │   ├── Historical data migration
│   │   ├── CDC for ongoing sync
│   │   └── Validation framework
│   ├── backend-architect: Application changes
│   └── qa-expert: Testing strategy
├── Implementation
│   ├── data-engineer: Migration execution
│   ├── database-optimizer: Performance tuning
│   └── devops-incident-responder: Monitoring
└── Cutover
    ├── data-engineer: Final sync
    ├── backend-architect: Application switch
    └── test-automator: Validation tests
```

## Advanced Data Engineering Patterns

### Pattern 1: Lambda Architecture
**User Prompt:**
```
"Implement Lambda architecture for real-time and batch data processing"
```

**Implementation Strategy:**
```yaml
architecture_layers:
  batch_layer:
    - data-engineer: Batch processing design
    - technology: Apache Spark, Hadoop
    - storage: Data lake (S3/HDFS)
    - schedule: Daily/hourly jobs
  
  speed_layer:
    - data-engineer: Stream processing
    - technology: Apache Flink, Kafka Streams
    - storage: In-memory cache
    - latency: Sub-second
  
  serving_layer:
    - data-engineer: Query consolidation
    - database-optimizer: Query optimization
    - frontend-developer: UI integration
```

### Pattern 2: Data Mesh Architecture
**User Prompt:**
```
"Implement data mesh architecture for decentralized data ownership"
```

**Data Mesh Implementation:**
```yaml
data_mesh_components:
  domain_data_products:
    - data-engineer: Product templates
    - product-manager: Domain ownership
    - backend-architect: API contracts
  
  self_serve_platform:
    - data-engineer: Platform tools
    - deployment-engineer: CI/CD pipelines
    - documentation-expert: Self-serve docs
  
  federated_governance:
    - data-engineer: Standards enforcement
    - security-auditor: Compliance
    - data-scientist: Quality metrics
```

## Integration Examples

### With Business Intelligence
**User Prompt:**
```
"Connect our data pipeline to Tableau for business reporting"
```

**BI Integration:**
```
data-engineer + data-scientist:
├── Data Preparation
│   ├── Aggregation tables
│   ├── Materialized views
│   └── Performance optimization
├── Connection Setup
│   ├── Direct database connection
│   ├── Extract scheduling
│   └── Incremental refresh
└── Governance
    ├── Access control
    ├── Data lineage
    └── Usage monitoring
```

### With Machine Learning
**User Prompt:**
```
"Build data pipeline for real-time ML model predictions"
```

**ML Integration:**
```
data-engineer + ml-engineer:
├── Training Pipeline
│   ├── Feature extraction
│   ├── Data validation
│   └── Version control
├── Inference Pipeline
│   ├── Real-time features
│   ├── Batch predictions
│   └── Result storage
└── Monitoring
    ├── Data drift detection
    ├── Model performance
    └── Pipeline health
```

## Best Practices

### 1. Data Quality First
**Example:**
```yaml
quality_checks:
  - Schema validation
  - Null checks
  - Range validation
  - Referential integrity
  - Duplicate detection
```

### 2. Idempotent Pipelines
**Example:**
```
"Design pipelines that can be safely re-run without side effects"
```

### 3. Monitoring & Alerting
**Example:**
```
"Pipeline health metrics, data quality scores, SLA monitoring, anomaly detection"
```

### 4. Documentation
**Example:**
```
"Data lineage, schema documentation, pipeline DAGs, runbooks"
```

## Common Use Cases

### 1. ETL/ELT Pipelines
```
"Build ETL pipeline processing customer data from CRM to data warehouse"
```

### 2. Real-Time Analytics
```
"Set up real-time analytics for website clickstream data"
```

### 3. Data Lake Implementation
```
"Design and implement data lake architecture on AWS S3"
```

### 4. CDC Implementation
```
"Implement change data capture from PostgreSQL to Kafka"
```

### 5. Data Quality Framework
```
"Build comprehensive data quality monitoring and alerting system"
```

## Technology Stack

- **Batch Processing**: Apache Spark, Hadoop, Apache Beam
- **Stream Processing**: Apache Kafka, Flink, Kinesis
- **Orchestration**: Apache Airflow, Prefect, Dagster
- **Storage**: S3, HDFS, Delta Lake, Apache Iceberg
- **Databases**: Snowflake, BigQuery, Redshift, ClickHouse
- **Languages**: Python, Scala, SQL, Java

## Tips for Effective Use

1. **Define data volume** - Daily volume, peak throughput
2. **Specify latency requirements** - Real-time vs. batch
3. **Include data sources** - APIs, databases, files
4. **Clarify quality requirements** - Accuracy, completeness
5. **Mention compliance** - GDPR, data retention policies

## Common Pitfalls to Avoid

1. **Ignoring data quality** - Implement checks early
2. **Over-engineering** - Start simple, evolve as needed
3. **Missing monitoring** - Track pipeline health
4. **Poor error handling** - Design for failure recovery
5. **No documentation** - Document pipelines and schemas

## Related Agents
- **database-optimizer**: Query and schema optimization
- **ml-engineer**: ML pipeline integration
- **data-scientist**: Analytics requirements
- **cloud-architect**: Infrastructure design
- **backend-architect**: API integration