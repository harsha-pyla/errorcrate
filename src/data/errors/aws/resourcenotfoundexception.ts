import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "resourcenotfoundexception",
  "name": "ResourceNotFoundException",
  "category": "aws",
  "badges": [
    "AWS API",
    "Not Found Error",
    "High Priority"
  ],
  "updatedAt": "June 30, 2026",
  "shortDescription": "This error occurs when the requested resource (such as a DynamoDB table, Lambda function, or secret) does not exist in the specified AWS region or account.",
  "meanDescription": "A 'ResourceNotFoundException' is raised when an API client attempts to read, update, or delete an AWS resource that the service cannot find. AWS resources are scoped strictly by AWS Account ID and AWS Region. Typical causes include typos in the resource name (e.g. table name or secret name), specifying the wrong region context (e.g., querying us-east-1 when the secret is created in us-west-2), or attempting to access a resource that has been deleted or is still provisioning.",
  "causes": [
    "Typo in resource name: The database table, lambda function name, or secret path contains spelling mistakes or wrong suffixes.",
    "Active region mismatch: The calling client environment is configured to point to one region (e.g. us-east-1) while the target resource resides in another region (e.g. us-west-2).",
    "Resource deleted or not yet created: The resource has either been deleted by another user/process or is still undergoing creation/stack deployment."
  ],
  "solutions": [
    "Verify AWS Region: Check the client's configured region or pass the '--region' flag explicitly to match the resource's physical location.",
    "List available resources: Run 'aws dynamodb list-tables', 'aws lambda list-functions', or 'aws secretsmanager list-secrets' to confirm availability and exact spelling.",
    "Check resource status: Query status using the describe API (e.g. 'aws dynamodb describe-table --table-name <table-name>') to ensure status is 'ACTIVE'."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "An error occurred (ResourceNotFoundException) when calling the DescribeTable operation: Requested resource not found: Table ProductTable not found",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to query a table that does not exist in the target region\naws dynamodb describe-table --table-name ProductTable --region us-east-1",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "An error occurred (ResourceNotFoundException) when calling the DescribeTable operation: Requested resource not found: Table ProductTable not found\n$ echo $?\n254",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "CLI waiter usage",
      "language": "bash",
      "description": "Utilize AWS CLI waiter commands inside shell scripts to block execution until the target resource is fully active.",
      "code": "# 1. Create a DynamoDB table\n$ aws dynamodb create-table --table-name ProductTable --attribute-definitions AttributeName=id,AttributeType=S --key-schema AttributeName=id,KeyType=HASH --billing-mode PAY_PER_REQUEST\n\n# 2. Block script execution until table transitions to ACTIVE state\n$ aws dynamodb wait table-exists --table-name ProductTable"
    },
    {
      "name": "Node.js Region Override",
      "language": "javascript",
      "description": "Ensure the SDK Client instance specifies the exact region parameter matching the physical resource location.",
      "code": "import { DynamoDBClient, DescribeTableCommand } from \"@aws-sdk/client-dynamodb\";\n\n// Explicitly map the region where the table resides to prevent ResourceNotFoundException\nconst client = new DynamoDBClient({ region: \"us-west-2\" });\n\ntry {\n  const response = await client.send(new DescribeTableCommand({ TableName: \"ProductTable\" }));\n  console.log(\"Table Status:\", response.Table.TableStatus);\n} catch (err) {\n  console.error(\"Lookup failed:\", err.message);\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "List existing resources inside specific regions using the AWS CLI.",
      "code": "# 1. List DynamoDB tables in oregon region\naws dynamodb list-tables --region us-west-2\n\n# 2. List secrets in secrets manager\naws secretsmanager list-secrets --region us-west-2"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Query active region parameters inside Windows environments.",
      "code": "# Print active region configuration variables\necho $env:AWS_DEFAULT_REGION"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Verify AWS CLI active configs.",
      "code": "aws configure list"
    }
  ],
  "commonMistakes": [
    "Assuming resources are global (with the exception of IAM, Route 53, and CloudFront, most AWS resources are strictly regional).",
    "Spelling secret paths or lambda names with wrong environments prefixes or trailing spaces."
  ],
  "prevention": [
    "Adopt infrastructure as code configurations (Terraform / CloudFormation) to automatically wire target resources variables.",
    "Adopt automated verification scripts to test resource states prior to application startups."
  ],
  "faq": [
    {
      "question": "What is a ResourceNotFoundException?",
      "answer": "This is a client-side (400 Bad Request) error. It means the AWS service verified your credentials and permissions, but could not physically find the specific table, function, secret, or stream you requested."
    },
    {
      "question": "Why do I get this error when my resource definitely exists?",
      "answer": "Check the region. This is the most common cause. If your DynamoDB table was created in 'us-west-2' (Oregon), but your local environment variable 'AWS_DEFAULT_REGION' is set to 'us-east-1' (N. Virginia), any queries to the table will fail with ResourceNotFoundException."
    },
    {
      "question": "How do I solve this for Secrets Manager?",
      "answer": "Confirm the Secret Name matches exactly, including slashes or environments prefixes (e.g. '/prod/database/password'). If you use a Secret ARN, make sure the suffix characters match. Run 'aws secretsmanager list-secrets' to verify."
    },
    {
      "question": "How do I wait for a resource to be created in scripts?",
      "answer": "Use AWS CLI waiters. Waiters poll the resource status until it reaches a ready state. For example: 'aws dynamodb wait table-exists --table-name ProductTable'. This pauses your shell script execution until the table status transitions to 'ACTIVE'."
    }
  ],
  "helpfulResources": [
    {
      "name": "AWS CLI Waiter reference guide",
      "url": "https://awscli.amazonaws.com/v2/documentation/api/latest/reference/dynamodb/wait/index.html"
    }
  ],
  "relatedErrors": [
    "validationexception"
  ],
  "quickFix": {
    "causes": [
      "Target resource resides inside different physical region than client's active config",
      "The table, function, or secret name contains typing mistakes or missing prefix keys",
      "Resource has been deleted or is still undergoing creation sequences"
    ],
    "checklist": [
      "Verify default region settings in configure profiles",
      "List resources using CLI (list-tables, list-functions) to verify spelling",
      "Use AWS CLI wait commands inside launch scripts",
      "Ensure resource status is ACTIVE before making transactions requests"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "AWS Region mismatch (resource is in us-west-2, client queries us-east-1)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Typo in resource name or suffix string",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Querying resource that has been deleted or not yet fully provisioned",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "ResourceNotFoundException: Complete AWS Troubleshooting.",
  "seoDescription": "Learn how to fix ResourceNotFoundException in AWS. Understand the root causes, see real code examples, and apply verified solutions to resolve this error."
};

export default errorData;
