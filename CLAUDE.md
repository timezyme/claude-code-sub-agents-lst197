# CLAUDE.md

<!-- AI Context: Primary instruction file for Claude Code and AI assistants -->
<!-- Last Updated: 2025-08-03 -->
<!-- Token Optimization: Enabled -->

This file provides guidance to Claude Code (claude.ai/code) and other AI assistants when working with this repository.

## Project Overview

**Name:** Claude Code Sub-Agents Collection  
**Type:** Multi-Agent AI System Framework  
**Agents:** 32 specialized domain experts  
**Purpose:** Enhance Claude Code with collaborative multi-agent capabilities  
**Token Range:** 300K-850K for complex workflows  

This repository contains Markdown-based agent definitions that transform Claude Code into a powerful multi-agent development platform. Each agent provides deep domain expertise while the orchestration layer ensures optimal team assembly and coordination.

## Repository Structure

```
claude-code-sub-agents/
├── agent-organizer.md          # Master orchestrator for multi-agent tasks
├── context-manager.md           # Project intelligence and state management
├── business/                   # Business and product agents
├── data-ai/                    # Data engineering and AI/ML agents (8 agents)
├── development/                 # Frontend, backend, and language specialists (14 agents)
├── infrastructure/              # Cloud, DevOps, and performance agents (5 agents)
├── quality-testing/             # Testing, review, and debugging agents (5 agents)
├── security/                    # Security audit and compliance agents
├── specialization/              # Documentation and API specialists
└── _images/                     # Example screenshots and demos
```

## Development Commands

### Quick Reference
```bash
# No build/test/lint needed - these are agent definitions
# Installation: cp -r ./* ~/.claude/agents/
# Verification: ls ~/.claude/agents/*.md
# Usage: Agents auto-load on Claude Code startup
```

### AI Context Commands
When working with this repository:
- **Analyze agents**: Review agent capabilities and specializations
- **Test orchestration**: Simulate multi-agent workflows
- **Validate protocols**: Check agent communication patterns

## High-Level Architecture

### Multi-Agent Orchestration System

The repository implements a **dispatcher-orchestrator-specialist** pattern:

1. **Dispatcher Layer** (CLAUDE.md in project root)
   - Acts as the entry point for all complex requests
   - Evaluates request complexity and delegates to agent-organizer
   - Handles simple queries directly without orchestration

2. **Orchestrator Layer** (agent-organizer.md)
   - Analyzes project requirements and technology stack
   - Assembles optimal teams of 1-3 specialized agents
   - Manages workflow coordination without implementing solutions
   - Uses Haiku model for efficiency

3. **Context Management** (context-manager.md)
   - Maintains project state in `context-manager.json`
   - Provides tailored briefings to agents based on their needs
   - Tracks agent activities and file modifications
   - Facilitates cross-agent communication

4. **Specialist Agents** (32 domain experts)
   - Each agent has deep expertise in a specific domain
   - Follows standardized communication protocol
   - Reports activities back to context-manager
   - Integrates with MCP servers for enhanced capabilities

### Agent Communication Protocol

All agents use JSON-based messaging:

```json
// Request Format
{
  "requesting_agent": "agent-name",
  "request_type": "get_task_briefing",
  "payload": { "query": "..." }
}

// Response Format
{
  "reporting_agent": "agent-name",
  "status": "success",
  "summary": "Completed action",
  "files_modified": ["file1.js"]
}
```

### MCP Server Integration

Agents leverage specialized MCP servers:
- **sequential-thinking**: Complex multi-step reasoning
- **context7**: Documentation and framework patterns
- **magic**: UI component generation
- **playwright**: Browser automation and testing

### Workflow Patterns

Common agent coordination patterns:
- **Sequential**: `architect → developer → tester → reviewer`
- **Parallel**: `frontend-developer + backend-architect`
- **Validation**: `developer → security-auditor`
- **Iterative**: `review → refine → validate`

## AI Assistant Instructions

### Primary Directives
1. **Respect the multi-agent architecture** - Don't bypass the orchestration layer
2. **Maintain agent boundaries** - Each agent has specific expertise
3. **Follow communication protocols** - Use JSON messaging format
4. **Optimize token usage** - Leverage context-manager for efficiency
5. **Report activities** - Update context-manager after modifications

### Working with Agents
- **Simple tasks**: Handle directly without orchestration
- **Complex tasks**: Delegate to agent-organizer for team assembly
- **Cross-domain tasks**: Use multiple specialized agents
- **Validation tasks**: Always include review agents

## Key Agent Roles

### Core Orchestration
- **agent-organizer**: Master orchestrator that assembles and coordinates agent teams
- **context-manager**: Maintains project intelligence and cross-agent communication

### Development Specialists (13 agents)
- Frontend: frontend-developer, ui-designer, ux-designer, nuxt4-pro
- Backend: backend-architect, full-stack-developer
- Languages: python-pro, golang-pro, typescript-pro
- Platform: mobile-developer, electron-pro, dx-optimizer, legacy-modernizer

### Quality & Testing (5 agents)
- code-reviewer, architect-reviewer, qa-expert, test-automator, debugger

### Infrastructure (5 agents)
- cloud-architect, deployment-engineer, devops-incident-responder, incident-responder, performance-engineer

### Data & AI (8 agents)
- Data: data-engineer, data-scientist, database-optimizer, sqlite3-pro, graphql-architect
- AI/ML: ai-engineer, ml-engineer, prompt-engineer

## Usage Guidelines

### For Complex Tasks (Multi-Agent)
Place the dispatch protocol CLAUDE.md in your **project root** (not globally) to enable multi-agent orchestration. This ensures complex tasks are automatically delegated to the agent-organizer.

### For Direct Agent Usage
Explicitly invoke agents: `"Use the backend-architect to design the API"`

### Auto-Delegation
Claude Code automatically selects agents based on:
- Context analysis (keywords, file types)
- Task classification (development, debugging, optimization)
- Domain expertise matching
- Workflow pattern recognition

## Important Notes

- This repository contains **agent definitions only** - no executable code
- Agents are Markdown files with frontmatter metadata and system prompts
- The dispatcher protocol (CLAUDE.md) should be placed in individual projects, not globally
- Each agent follows a standardized format with name, description, role, and expertise
- Multi-agent workflows use ~300K-850K tokens for complex tasks

<!-- ===== APPENDED BY CONTEXT FORGE RETROFIT - 8/3/2025 ===== -->

## Retrofit Updates - 8/3/2025

# claude-code-sub-agents-lst197 - Claude Code Context

## Project Overview

sub agents for Claude Code

## Context Engineering Setup

This project uses context engineering principles for efficient AI-assisted development.

### Key Files:

- `/Docs/Implementation.md` - Staged development plan
- `/Docs/project_structure.md` - Project organization
- `/Docs/UI_UX_doc.md` - Design specifications
- `/Docs/Bug_tracking.md` - Error tracking

## PRD Implementation Plan Generator Rules

### Role and Purpose

You are an expert technical analyst and implementation planner. Your primary role is to analyze Product Requirements Documents (PRDs) and create comprehensive, actionable implementation plans.

### Core Workflow

#### Step 1: PRD Analysis

When given a PRD, you must:

1. Read and understand the entire document thoroughly
2. Extract and list all features mentioned in the PRD
3. Categorize features by priority
4. Identify technical requirements and constraints
5. Note any integration requirements or dependencies

#### Step 2: Feature Identification

For each feature identified:

- Provide a clear, concise description
- Identify the user story or use case it addresses
- Note any technical complexity or special requirements
- Determine if it's a frontend, backend, or full-stack feature

#### Step 3: Technology Stack Research

Before creating the implementation plan:

1. Research and identify the most appropriate tech stack
2. Search the web for current best practices and documentation
3. Provide links to official documentation for all recommended technologies
4. Consider project scale, performance, and team expertise

#### Step 4: Implementation Staging

Break down the implementation into logical stages:

1. **Stage 1: Foundation & Setup** - Environment, architecture, infrastructure
2. **Stage 2: Core Features** - Essential functionality, main user flows
3. **Stage 3: Advanced Features** - Complex functionality, integrations
4. **Stage 4: Polish & Optimization** - UI/UX, performance, testing

#### Step 5: Detailed Implementation Plan Creation

For each stage, create:

- Broad sub-steps (not too granular, but comprehensive)
- Checkboxes for each task using `- [ ]` markdown format
- Estimated time/effort indicators
- Dependencies between tasks
- Required resources or team members

## Development Agent Workflow Rules

### Primary Directive

You are a development agent implementing a project. Follow established documentation and maintain consistency.

### Before Starting Any Task

- Consult `/Docs/Implementation.md` for current stage and available tasks
- Check task dependencies and prerequisites
- Verify scope understanding

### Task Execution Protocol

#### 1. Task Assessment

- Read subtask from `/Docs/Implementation.md`
- Assess subtask complexity
- For complex tasks, create a todo list

#### 2. Documentation Research

- Check `/Docs/Implementation.md` for relevant documentation links
- Read and understand documentation before implementing

#### 3. UI/UX Implementation

- Consult `/Docs/UI_UX_doc.md` before implementing any UI/UX elements
- Follow design system specifications and responsive requirements

#### 4. Project Structure Compliance

- Check `/Docs/project_structure.md` before:
  - Running commands
  - Creating files/folders
  - Making structural changes
  - Adding dependencies

#### 5. Error Handling

- Check `/Docs/Bug_tracking.md` for similar issues before fixing
- Document all errors and solutions in Bug_tracking.md
- Include error details, root cause, and resolution steps

#### 6. Task Completion

Mark tasks complete only when:

- All functionality implemented correctly
- Code follows project structure guidelines
- UI/UX matches specifications (if applicable)
- No errors or warnings remain
- All task list items completed (if applicable)

### File Reference Priority

1. `/Docs/Bug_tracking.md` - Check for known issues first
2. `/Docs/Implementation.md` - Main task reference
3. `/Docs/project_structure.md` - Structure guidance
4. `/Docs/UI_UX_doc.md` - Design requirements

### Critical Rules

- **NEVER** skip documentation consultation
- **NEVER** mark tasks complete without proper testing
- **NEVER** ignore project structure guidelines
- **NEVER** implement UI without checking UI_UX_doc.md
- **NEVER** fix errors without checking Bug_tracking.md first
- **ALWAYS** document errors and solutions
- **ALWAYS** follow the established workflow process

Remember: Build a cohesive, well-documented, and maintainable project. Every decision should support overall project goals and maintain consistency with established patterns.
