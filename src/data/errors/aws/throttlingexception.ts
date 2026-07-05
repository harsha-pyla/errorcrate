import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "throttlingexception",
  "name": "ThrottlingException",
  "category": "aws",
  "badges": [
    "AWS Services",
    "API Limit",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when an API client is rate-limited or throttled by an AWS service due to exceeding transactional throughput limits.",
  "meanDescription": "A 'ThrottlingException' is a rate-limiting error thrown by modern AWS services (like API Gateway, Lambda, DynamoDB, or KMS) when client request rates exceed allocated transactional throughput thresholds. Unlike RequestLimitExceeded (which typically targets control plane APIs like EC2), ThrottlingException applies to data plane and application-level APIs. AWS services utilize Token Bucket rate limiting; when client calls exceed bucket capacity, subsequent requests are dropped with this exception.",
  "causes": [
    "DynamoDB Provisioned Capacity Exhaustion: Write/read throughput exceeds the table's provisioned Read/Write Capacity Units (RCUs/WCUs).",
    "AWS Lambda Concurrent Executions Limit: The account-level or function-reserved concurrency limit has been reached, causing Lambda to reject new invocations.",
    "KMS Cryptographic Operation Throttling: High-volume cryptographic calls (kms:Encrypt/Decrypt) exceed default regional request limits."
  ],
  "solutions": [
    "Configure Auto Scaling or On-Demand: Switch DynamoDB tables to 'On-Demand' (pay-per-request) or configure Auto Scaling for RCUs/WCUs.",
    "Adjust Reserved Concurrency in Lambda: Allocate reserved concurrency or configure SQS/SNS queue triggers to buffer incoming event traffic.",
    "Enable SDK-level rate-limiting: Configure adaptive retry strategies in the AWS SDK client, which dynamically rate-limit outgoing calls to match service responses."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "An error occurred (ThrottlingException) when calling the PutItem operation: Rate exceeded.",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Batch writing data to DynamoDB table exceeding capacity limits\naws dynamodb batch-write-item --request-items file://items.json",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "An error occurred (ThrottlingException) when calling the PutItem operation: Rate exceeded.\n$ echo $?\n254",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "SDK Adaptive Retry",
      "language": "ini",
      "description": "Configure the AWS configuration file to enforce adaptive client-side rate-limiting behaviors.",
      "code": "[default]\nregion = us-east-1\n# Enforce adaptive mode to dynamically slow client request rates\nretry_mode = adaptive\nmax_attempts = 15"
    },
    {
      "name": "DynamoDB On-Demand Mode",
      "language": "json",
      "description": "JSON snippet to switch a DynamoDB table payload to PAY_PER_REQUEST billing mode using AWS CLI commands.",
      "code": "# Execute billing mode update command\naws dynamodb update-table \\\n  --table-name ProductTable \\\n  --billing-mode PAY_PER_REQUEST"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Check active lambda concurrent executions limits using AWS CLI commands.",
      "code": "# 1. Inspect regional lambda concurrency settings\naws lambda get-account-settings\n\n# 2. Check a specific function's reserved concurrency\naws lambda get-function-concurrency --function-name process-orders"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Enforce adaptive retries in environment contexts inside Windows.",
      "code": "# Set environment configurations variables\n$env:AWS_RETRY_MODE=\"adaptive\"\n$env:AWS_MAX_ATTEMPTS=\"15\""
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Verify AWS CLI active config specifications.",
      "code": "cat ~/.aws/config"
    }
  ],
  "commonMistakes": [
    "Using static provisioned capacity mode on database workloads that experience highly erratic traffic spikes, triggering constant throttling.",
    "Neglecting to configure buffer queues (like Amazon SQS) in front of slow-starting Lambda functions."
  ],
  "prevention": [
    "Enable Amazon DynamoDB Auto Scaling to dynamically adapt capacity limits to active workload traffic.",
    "Implement client-side request queues or caching architectures to flatten traffic spikes."
  ],
  "faq": [
    {
      "question": "What is a ThrottlingException in AWS?",
      "answer": "This is a data-plane rate-limiting error. It means your application is making calls (like database writes, lambda invocations, or key decrypts) faster than the configured capacity or regional limits allow."
    },
    {
      "question": "How does DynamoDB handle throttling?",
      "answer": "If your database transactions exceed the provisioned Read/Write Capacity Units, DynamoDB returns a ThrottlingException. To avoid this, you can switch the table billing mode to 'PAY_PER_REQUEST' (On-Demand) or enable Auto Scaling to scale capacity dynamically."
    },
    {
      "question": "Why does KMS throttling occur?",
      "answer": "AWS KMS enforces regional limits on cryptographic calls (typically ranging from 10,000 to 80,000 requests per second depending on the region). If your application decrypts thousands of objects concurrently, KMS throttles the calls. You can request a quota increase or implement caching (e.g. AWS SDK KMS cache) to reduce API load."
    },
    {
      "question": "What is the adaptive retry mode in AWS SDKs?",
      "answer": "Standard retry mode uses a fixed backoff. Adaptive retry mode dynamically measures throttle responses from AWS and client-side delays outgoing calls before they are sent, matching client traffic to the service's current throughput capacity."
    }
  ],
  "helpfulResources": [
    {
      "name": "AWS SDK Retries and Backoff guide",
      "url": "https://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html"
    }
  ],
  "relatedErrors": [
    "requestlimitexceeded"
  ],
  "quickFix": {
    "causes": [
      "DynamoDB transactional throughput exceeds provisioned RCU/WCU limits",
      "AWS Lambda function hits reserved or regional concurrency allocations limits",
      "High concurrent cryptographic operations exceed regional KMS rate limits"
    ],
    "checklist": [
      "Switch DynamoDB to PAY_PER_REQUEST (On-Demand) billing mode",
      "Enable retry_mode = adaptive inside AWS config profile settings",
      "Increase Lambda reserved concurrency limits or integrate SQS buffers",
      "Request service quota rate increases for hot regional API endpoints"
    ],
    "estimatedTime": "4 minutes"
  },
  "causesTable": [
    {
      "cause": "DynamoDB read/write operations exceed configured WCU/RCU limits",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "KMS decryption requests exceed regional cryptographic API rates",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "AWS Lambda concurrent executions hit reserved concurrency limits",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Debug ThrottlingException in AWS — Step-by-Step Fix",
  "seoDescription": "Getting ThrottlingException in AWS? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code examples to fix."
};

export default errorData;
