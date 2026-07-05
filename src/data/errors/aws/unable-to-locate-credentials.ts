import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "unable-to-locate-credentials",
  "name": "Unable to locate credentials",
  "category": "aws",
  "badges": [
    "AWS CLI",
    "SDK Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the AWS CLI or SDK cannot find any valid authentication credentials in the default credentials provider chain.",
  "meanDescription": "An 'Unable to locate credentials' error is raised by AWS CLI or SDK clients during initialization if the credentials provider chain fails to locate any credentials. AWS clients search for credentials in a specific sequence: environment variables, the default credentials file ('~/.aws/credentials'), container credentials (ECS task roles), and lastly, EC2 instance metadata (IMDS). If all locations are empty, the client halts execution.",
  "causes": [
    "No credentials configured: The local client machine has never run 'aws configure' and contains no credentials file.",
    "Wrong config file path or permissions: The credentials file is saved in a non-standard location, has incorrect file permissions, or the home environment variable is unset.",
    "Container or VM instance role missing: Workloads scheduled on AWS EC2 or ECS assume they can fetch credentials via metadata endpoints, but no IAM Instance Profile or Task Role is attached."
  ],
  "solutions": [
    "Initialize credentials using AWS CLI: Run 'aws configure' to input access keys and target region parameters.",
    "Set standard environment variables: Define 'AWS_ACCESS_KEY_ID' and 'AWS_SECRET_ACCESS_KEY' in the runtime environment.",
    "Attach IAM Instance Profile: Attach a role to the EC2/ECS node to allow automated credentials retrieval via instance metadata."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Unable to locate credentials. You can configure credentials by running \"aws configure\".",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to query S3 buckets on unconfigured system\naws s3 ls",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Unable to locate credentials. You can configure credentials by running \"aws configure\".\n$ echo $?\n255",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "CLI Credentials Chain",
      "language": "bash",
      "description": "Initialize the default credentials configuration using interactive CLI command flags.",
      "code": "# Run configure and input your access parameters\n$ aws configure\n\nAWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE\nAWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\nDefault region name [None]: us-east-1\nDefault output format [None]: json"
    },
    {
      "name": "Node.js SDK Auto-Resolve",
      "language": "javascript",
      "description": "Standard credentials loading order used by the AWS SDK for JavaScript v3.",
      "code": "import { S3Client, ListBucketsCommand } from \"@aws-sdk/client-s3\";\n\n// 1. S3Client automatically evaluates default credential provider chain:\n// - Process environment variables (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)\n// - Shared credentials file (~/.aws/credentials)\n// - ECS task role or EC2 instance profile metadata\nconst s3Client = new S3Client({ region: \"us-east-1\" });\n\ntry {\n  const data = await s3Client.send(new ListBucketsCommand({}));\n  console.log(\"Buckets:\", data.Buckets);\n} catch (err) {\n  console.error(\"Authentication failed:\", err.message);\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Inspect credentials directory structure and check file access rights.",
      "code": "# 1. Verify existence of configuration folder\nls -la ~/.aws/\n\n# 2. Check variables export\necho $AWS_ACCESS_KEY_ID"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Set environment variables credentials globally in Windows PowerShell.",
      "code": "# Define local session variables\n$env:AWS_ACCESS_KEY_ID=\"AKIAIOSFODNN7EXAMPLE\"\n$env:AWS_SECRET_ACCESS_KEY=\"wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\"\n$env:AWS_DEFAULT_REGION=\"us-east-1\""
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Query credentials file contents using cat.",
      "code": "cat ~/.aws/config"
    }
  ],
  "commonMistakes": [
    "Specifying a profile name via `--profile` flag but omitting the corresponding configuration section inside `~/.aws/config` or `~/.aws/credentials`.",
    "Relying on local credential files inside Docker containers without mounting host `~/.aws` directories or passing environment variables."
  ],
  "prevention": [
    "Adopt IAM instance profiles or IAM roles for service accounts (IRSA) inside containerized infrastructure to avoid hardcoding access keys.",
    "Adopt script checks to verify active auth contexts prior to running tasks."
  ],
  "faq": [
    {
      "question": "What does 'Unable to locate credentials' mean?",
      "answer": "This means the AWS CLI or SDK looked through its entire list of default credential locations (environment variables, config files, IAM instance metadata) and found absolutely nothing to authenticate with."
    },
    {
      "question": "How do I solve this on my local development machine?",
      "answer": "Run: 'aws configure'. It will prompt you for your AWS Access Key ID, Secret Access Key, Default Region, and Output format, and then save them to '~/.aws/credentials' and '~/.aws/config'."
    },
    {
      "question": "Why does my code run locally but fail on AWS EC2 or ECS with this error?",
      "answer": "Locally, your SDK uses your local credentials file. On AWS, it expects to fetch credentials from the Instance Metadata Service (IMDS) or ECS Task Metadata. You must attach an IAM Instance Profile (for EC2) or an ECS Task Execution Role to the resource, or the SDK will fail to locate credentials."
    },
    {
      "question": "How do I specify a non-default profile name?",
      "answer": "If your credentials are saved under a named profile (e.g. '[staging]'), you must pass the profile name to the CLI using '--profile staging' or set the environment variable 'export AWS_PROFILE=staging'. Otherwise, the CLI only looks for the '[default]' profile."
    }
  ],
  "helpfulResources": [
    {
      "name": "AWS CLI Configuration variables documentation",
      "url": "https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"
    }
  ],
  "relatedErrors": [
    "nocredentialproviders"
  ],
  "quickFix": {
    "causes": [
      "No configuration profile has been created on the client machine",
      "Active workload lacks EC2 IAM Instance Profile or ECS Task execution role bindings",
      "Stale environment variable configurations mask active config files"
    ],
    "checklist": [
      "Run aws configure to initialize the credentials parameters",
      "Confirm AWS_ACCESS_KEY_ID is declared in target runtime shell",
      "Verify IAM role is attached to the host EC2 virtual machine",
      "Check permissions on the ~/.aws/ credentials folder"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Missing configuration file (never ran 'aws configure')",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Workload running on EC2/ECS without attached IAM Instance Profile",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Incorrect profile name requested (using --profile with wrong naming)",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Fix Unable to locate credentials in AWS — Causes & Solutions",
  "seoDescription": "Resolve Unable to locate credentials in AWS with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and."
};

export default errorData;
