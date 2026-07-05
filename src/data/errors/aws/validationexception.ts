import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "validationexception",
  "name": "ValidationException",
  "category": "aws",
  "badges": [
    "AWS API",
    "Validation Error",
    "High Priority"
  ],
  "updatedAt": "June 30, 2026",
  "shortDescription": "This error occurs when the input parameters provided in the AWS API call fail to satisfy the schema or constraints specified by the service.",
  "meanDescription": "A 'ValidationException' is returned by AWS API services (such as DynamoDB, Lambda, or API Gateway) when the request payload is syntactically invalid or violates schema constraints. Senders receive this error during the synchronous request validation phase before the service attempts to write data or execute scripts. Typical triggers include sending parameters that exceed length bounds, supplying wrong data types, or omitting required fields.",
  "causes": [
    "Invalid data types or schemas: Passing an integer parameter to a field where DynamoDB expects a string type representation ('S').",
    "Exceeding size or count boundaries: Request payloads exceeding API limits, such as a DynamoDB primary key value exceeding 2048 bytes or partition key limits.",
    "Reserved keywords usage: Using reserved keywords (e.g. 'status', 'name', 'value') as attribute names inside DynamoDB expression strings without using ExpressionAttributeNames."
  ],
  "solutions": [
    "Use ExpressionAttributeNames: In DynamoDB queries, reference reserved keywords using placeholders (like '#status') and map them to the actual name.",
    "Verify JSON structure types: Inspect the payload schema and make sure types (strings, lists, maps) exactly match the API documentation specifications.",
    "Trim parameter values: Add input sanitization or validators within application code to reject invalid lengths before making API calls."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "An error occurred (ValidationException) when calling the UpdateItem operation: Invalid UpdateExpression: The provided expression refers to the document path [status], which is a reserved keyword; user-defined fields must not conflict with a reserved keyword",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to update an item using the reserved keyword 'status' directly in update expression\naws dynamodb update-item \\\n  --table-name ProductTable \\\n  --key '{\"id\": {\"S\": \"1001\"}}' \\\n  --update-expression \"SET status = :s\" \\\n  --expression-attribute-values '{\":s\": {\"S\": \"ACTIVE\"}}'",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "An error occurred (ValidationException) when calling the UpdateItem operation: Invalid UpdateExpression: The provided expression refers to the document path [status], which is a reserved keyword; user-defined fields must not conflict with a reserved keyword\n$ echo $?\n254",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "DynamoDB Expression Fix",
      "language": "javascript",
      "description": "Utilize ExpressionAttributeNames in Node.js AWS SDK v3 to safely query reserved keywords without triggering ValidationExceptions.",
      "code": "import { DynamoDBClient, UpdateItemCommand } from \"@aws-sdk/client-dynamodb\";\n\nconst client = new S3Client({ region: \"us-east-1\" });\n\nconst command = new UpdateItemCommand({\n  TableName: \"ProductTable\",\n  Key: {\n    id: { S: \"1001\" }\n  },\n  // Use placeholder #status instead of direct 'status'\n  UpdateExpression: \"SET #status = :s\",\n  ExpressionAttributeNames: {\n    \"#status\": \"status\"\n  },\n  ExpressionAttributeValues: {\n    \":s\": { S: \"ACTIVE\" }\n  }\n});\n\ntry {\n  await client.send(command);\n  console.log(\"Update succeeded!\");\n} catch (err) {\n  console.error(\"Update failed:\", err.message);\n}"
    },
    {
      "name": "Correct Type Definition",
      "language": "json",
      "description": "Align parameter JSON attributes types (e.g. N for numbers) inside DynamoDB payload descriptors.",
      "code": "{\n  \"id\": {\"S\": \"1001\"},\n  # Specify 'N' for numerical string formats to avoid validations faults\n  \"price\": {\"N\": \"49.99\"},\n  \"tags\": {\"SS\": [\"electronics\", \"sale\"]}\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Check payload byte sizes using command line utilities to verify they fit inside AWS limits.",
      "code": "# Calculate item size in bytes\nwc -c payload.json"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Calculate item sizes inside Windows PowerShell.",
      "code": "# Read file size attribute\n(Get-Item .\\payload.json).Length"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Format API calls logs.",
      "code": "aws sts get-caller-identity"
    }
  ],
  "commonMistakes": [
    "Using raw reserved words like `key`, `name`, `status`, `type`, `role` directly inside DynamoDB expressions.",
    "Passing raw JavaScript objects or unformatted strings directly into raw DynamoDB client API maps (use the DynamoDB DocumentClient utility to auto-translate standard JS types to DynamoDB map formats)."
  ],
  "prevention": [
    "Adopt AWS SDK DocumentClient utilities to automate type mappings.",
    "Introduce application schema validations (like Joi or Zod schemas) to reject bad input before sending requests."
  ],
  "faq": [
    {
      "question": "What is a ValidationException in AWS?",
      "answer": "This is a client-side (400 Bad Request) schema validation error. It means the JSON payload or parameters you sent to the AWS API do not match the expected structure, constraints, or data types required by the service."
    },
    {
      "question": "Why does DynamoDB throw ValidationException for words like 'status' or 'name'?",
      "answer": "DynamoDB has a long list of reserved keywords (like 'status', 'name', 'user', 'date'). If you include these directly in expressions (e.g. 'UpdateExpression=\"SET status = :s\"'), the parser fails and throws a ValidationException. To fix this, you must use expression attribute names (e.g. '#status') and map them: 'ExpressionAttributeNames: {\"#status\": \"status\"}'."
    },
    {
      "question": "How do I avoid data type mismatch validation exceptions?",
      "answer": "Ensure your SDK code specifies exact DynamoDB types. For example, if you write: 'id': {'S': 123}, it fails validation because '123' is an integer, but you used the string ('S') type specifier. You should write: 'id': {'N': '123'} or 'id': {'S': '123'}."
    },
    {
      "question": "Why do API Gateway or Lambda throw this error?",
      "answer": "This happens when request payloads fail models or schema checks configured in API Gateway, or when Lambda invocation payloads exceed maximum invocation sizes (e.g. 6MB limit for synchronous payloads)."
    }
  ],
  "helpfulResources": [
    {
      "name": "DynamoDB Reserved Words guide",
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html"
    }
  ],
  "relatedErrors": [
    "resourcenotfoundexception"
  ],
  "quickFix": {
    "causes": [
      "Referencing reserved keywords directly in DynamoDB query expressions",
      "Mismatch between requested parameter schemas and AWS API type expectations",
      "Payload sizes or partition keys exceed regional limits bounds"
    ],
    "checklist": [
      "Replace reserved keywords with ExpressionAttributeNames (#name)",
      "Verify data types attributes definitions (S, N, B, SS, NS)",
      "Ensure payload sizes fit within service limits (e.g. 400KB item limit for DynamoDB)",
      "Audit API Gateway request models schema configurations"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Using reserved words (e.g. status, name) in DynamoDB expression queries",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Input parameter data type mismatch (e.g. string vs list objects)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Request payload exceeds size or item limit boundaries",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "ValidationException: Quick Fix Guide for AWS Developers",
  "seoDescription": "Fix ValidationException fast. This AWS debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world code."
};

export default errorData;
