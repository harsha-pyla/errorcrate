import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "requestlimitexceeded",
  "name": "RequestLimitExceeded",
  "category": "aws",
  "badges": [
    "Amazon EC2",
    "API Limit",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when your account exceeds the allowed rate of API requests for Amazon EC2 or other control plane operations.",
  "meanDescription": "A 'RequestLimitExceeded' error is returned by Amazon EC2 (and other AWS services) when the rate of API calls (such as DescribeInstances, DescribeVolumes, or RunInstances) exceeds the service's API request quota. AWS enforces token bucket algorithms to limit control plane call rates, preventing system overloading. If client loops query status rapidly without backoff, the request limits are exhausted.",
  "causes": [
    "Aggressive polling loops: Custom monitoring scripts or script loops call 'DescribeInstances' or resource status queries repeatedly without pause.",
    "High concurrency deployments: Orchestrators (like Kubernetes cluster autoscalers or Terraform runs) query EC2 resources concurrently across multiple threads.",
    "Unconfigured SDK retry behaviors: Client SDK clients do not utilize exponential backoff retry handlers, raising exceptions immediately."
  ],
  "solutions": [
    "Implement Exponential Backoff: Add exponential backoff and jitter algorithms (delaying retries: 1s, 2s, 4s, etc.) to client loops.",
    "Cache API query responses: Store query values (like list arrays) locally rather than querying the AWS endpoint repeatedly.",
    "Request limit increase: Request control plane quota increases via AWS Service Quotas console if traffic volumes require higher limits."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "An error occurred (RequestLimitExceeded) when calling the DescribeInstances operation: Request limit exceeded.",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Polling DescribeInstances query rapidly inside loop without sleep\nwhile true; do aws ec2 describe-instances; done",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "An error occurred (RequestLimitExceeded) when calling the DescribeInstances operation: Request limit exceeded.\n$ echo $?\n254",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "CLI Config Retries",
      "language": "ini",
      "description": "Increase retry limits and enforce the standard retry mode (which supports exponential backoff) inside the AWS configuration file.",
      "code": "[default]\nregion = us-west-2\n# Enforce the newer 'standard' or 'adaptive' retry mode\nretry_mode = standard\n# Increase max retry attempts threshold\nmax_attempts = 10"
    },
    {
      "name": "Python Jitter Backoff",
      "language": "python",
      "description": "Implement manual exponential backoff with full jitter in custom Python resource polling loops.",
      "code": "import time\nimport random\nimport boto3\nfrom botocore.exceptions import ClientError\n\nec2 = boto3.client('ec2', region_name='us-west-2')\n\ndef get_instances_with_backoff():\n    base_backoff = 1.0  # start with 1 second delay\n    max_backoff = 30.0  # cap delay at 30 seconds\n    max_retries = 5\n    \n    for attempt in range(max_retries):\n        try:\n            return ec2.describe_instances()\n        except ClientError as error:\n            if error.response['Error']['Code'] == 'RequestLimitExceeded':\n                if attempt == max_retries - 1:\n                    raise\n                # Calculate exponential delay with full jitter\n                temp = min(max_backoff, base_backoff * (2 ** attempt))\n                sleep_time = random.uniform(0, temp)\n                print(f\"Throttled. Retrying in {sleep_time:.2f} seconds...\")\n                time.sleep(sleep_time)\n            else:\n                raise"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Override retry parameters in Linux shell sessions using environment variables.",
      "code": "# 1. Enforce standard retry modes globally\nexport AWS_RETRY_MODE=standard\n\n# 2. Enforce retry maximum limits threshold\nexport AWS_MAX_ATTEMPTS=8"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Set retry environment parameters inside Windows PowerShell.",
      "code": "# Configure PowerShell environment variables\n$env:AWS_RETRY_MODE=\"standard\"\n$env:AWS_MAX_ATTEMPTS=\"8\""
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Verify AWS CLI active config file properties.",
      "code": "cat ~/.aws/config"
    }
  ],
  "commonMistakes": [
    "Writing infinite status checking loops without sleep timers, exhausting API credits in seconds.",
    "Assuming that request limit failures indicate instance availability limits."
  ],
  "prevention": [
    "Configure client applications to cache slow-changing API metadata locally.",
    "Adopt AWS CloudWatch alarms to track AWS API call volumes metrics."
  ],
  "faq": [
    {
      "question": "What is a RequestLimitExceeded error?",
      "answer": "This is an API rate-limiting error. AWS limits how fast you can call control plane APIs (like describing instances or creating volumes). If you exceed the allowed request rate, AWS throttles your client with this error."
    },
    {
      "question": "How is this different from service quota limits?",
      "answer": "Service quotas limit the number of resources you can have (e.g. max 20 EC2 instances). 'RequestLimitExceeded' limits the rate of API actions you can perform per second (e.g. max 100 DescribeInstances calls per second)."
    },
    {
      "question": "How do I solve this in my scripts?",
      "answer": "Always implement exponential backoff with jitter. Instead of retrying failed requests immediately, wait for a short duration, then double the wait time for subsequent retries, and add random microsecond offsets (jitter) to prevent client synchronization spikes."
    },
    {
      "question": "Does the AWS SDK auto-retry these errors?",
      "answer": "Yes, modern AWS SDKs have built-in retry handlers that automatically catch RequestLimitExceeded and retry with exponential backoff. However, you can configure or increase the maximum retry limit (e.g. setting 'max_attempts' to 10 in your AWS config file)."
    }
  ],
  "helpfulResources": [
    {
      "name": "AWS EC2 API Request Throttling guide",
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/query-api-troubleshooting.html#api-request-throttling"
    }
  ],
  "relatedErrors": [
    "throttlingexception"
  ],
  "quickFix": {
    "causes": [
      "Custom monitoring scripts poll status endpoints repeatedly without delay intervals",
      "Large-scale automation tools hit EC2 control plane endpoints concurrently",
      "Default SDK configuration limits are too low, causing immediate failures"
    ],
    "checklist": [
      "Ensure standard retry mode is active in AWS configuration files",
      "Add sleep timers to all custom resource polling loops",
      "Enforce exponential backoff and jitter inside custom code scripts",
      "Review API call frequencies inside AWS CloudTrail history logs"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Aggressive loops polling resource statuses without sleep intervals",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "High concurrent queries from large infrastructure orchestrators (Autoscalers)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Default client SDK settings lacking exponential backoff overrides",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Fix RequestLimitExceeded Fast — AWS Solutions Guide",
  "seoDescription": "RequestLimitExceeded in AWS — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this error."
};

export default errorData;
