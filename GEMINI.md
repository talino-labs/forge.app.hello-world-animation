# Nmblr Forge Deployment & Development Rules

These rules govern the development and launch process of the Note Taker application.

## 1. Codebase Instructions
- **Database Bootstrapping**: Ensure `node --env-file=.env db-init.js` is run before the dev server starts (configured in the `package.json` scripts).
- **Index Actions**: When building form submissions to the index page, always set `action="/?index"` instead of `action="/"` to correctly route POST requests to the index route handler.

## 2. Checkrun & Deployment Workflow Rules
- **Vulnerability Checks First**: Never deploy to AWS ECS without first running the checkruns pipeline (via tag push) and waiting for it to complete successfully.
- **User Confirmation Required**: Always display the scan report findings to the user and request explicit confirmation before triggering the deployment workflow.
- **Verification Report Viewing**: When a checkrun report is compiled and downloaded to `./reports/report-${version}.html`, open the report in the `/browser` (if local file access is enabled) or provide the absolute clickable filesystem link so the developer can inspect it.
