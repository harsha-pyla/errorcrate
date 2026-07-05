import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "invalidclienttokenid",
  "name": "InvalidClientTokenId",
  "category": "aws",
  "badges": [
    "AWS IAM",
    "Authentication Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the AWS Access Key ID provided in the request is invalid, inactive, or unrecognized by AWS.",
  "meanDescription": "An 'InvalidClientTokenId' error indicates an authentication failure. The AWS gateway cannot map the provided Access Key ID to any active IAM user or role account. This occurs when copy-pasting wrong strings, referencing deactivated credentials, using tokens belonging to a deleted IAM profile, or calling wrong partitions (e.g. AWS China or AWS GovCloud) with standard partition keys.",
  "causes": [
    "Typo in Access Key ID: The 'aws_access_key_id' parameter in the credentials file contains a spelling error or missing characters.",
    "Deactivated IAM Access Key: The administrator has marked the Access Key status as 'Inactive' or deleted it inside the IAM Console.",
    "Partition Mismatch: Using AWS Commercial partition keys to authenticate against AWS GovCloud (us-gov) or AWS China (cn-north-1) endpoints."
  ],
  "solutions": [
    "Double-check Access Key string: Inspect the '~/.aws/credentials' file and verify key lengths and characters.",
    "Validate key state in IAM Console: Ensure the key is active. Generate a new Access Key if the old one was deleted.",
    "Verify active environment variables: Clear hardcoded shell overrides that might mask config file values."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "An error occurred (InvalidClientTokenId) when calling the GetCallerIdentity operation: The security token included in the request is invalid.",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Accessing AWS API using misspelled Access Key ID\naws sts get-caller-identity",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "An error occurred (InvalidClientTokenId) when calling the GetCallerIdentity operation: The security token included in the request is invalid.\n$ echo $?\n254",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Credentials File Config",
      "language": "ini",
      "description": "Configure the standard AWS credentials file mapping active access keys.",
      "code": "[default]\n# Ensure key characters are not truncated (standard access keys start with AKIA or ASIA)\naws_access_key_id = AKIAIOSFODNN7EXAMPLE\naws_secret_access_key = wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
    },
    {
      "name": "Checking CLI config origins",
      "language": "bash",
      "description": "Run config list command to locate where access keys are being loaded from.",
      "code": "# Identify active credentials origins\n$ aws configure list"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Verify environment variable overrides inside Linux shell contexts.",
      "code": "# 1. Inspect environment variables values\nenv | grep AWS\n\n# 2. Check credentials file format\ncat ~/.aws/credentials"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Clean up environment credentials variables inside Windows PowerShell.",
      "code": "# Remove stale env overrides\nRemove-Item Env:\\AWS_ACCESS_KEY_ID -ErrorAction SilentlyContinue\nRemove-Item Env:\\AWS_SECRET_ACCESS_KEY -ErrorAction SilentlyContinue"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Query CLI version settings.",
      "code": "aws --version"
    }
  ],
  "commonMistakes": [
    "Deactivating an access key in the IAM Console but forgetting to replace it inside client apps, triggering InvalidClientTokenId failures.",
    "Accidentally pasting leading or trailing spaces within Access Key ID values."
  ],
  "prevention": [
    "Adopt IAM Roles for EC2/ECS workloads instead of static Access Keys to bypass credentials decay issues.",
    "Set alerts for Access Keys rotations routines to manage credentials systematically."
  ],
  "faq": [
    {
      "question": "What is an InvalidClientTokenId error?",
      "answer": "This is an authentication error. It means the AWS Access Key ID you are using is either misspelled, inactive, deleted, or does not exist in the AWS account you are hitting."
    },
    {
      "question": "How does this differ from SignatureDoesNotMatch?",
      "answer": "InvalidClientTokenId means AWS does not recognize the Access Key ID at all. SignatureDoesNotMatch means AWS recognizes the Access Key ID, but the Secret Access Key (or session token) used to sign the request is incorrect."
    },
    {
      "question": "Why do I get this error when using GovCloud?",
      "answer": "AWS GovCloud is an isolated partition. Standard AWS commercial keys do not work in the GovCloud partition. You must use specific GovCloud IAM credentials and configure your client to point to GovCloud endpoints."
    },
    {
      "question": "How do I verify which credentials the CLI is currently using?",
      "answer": "Run: 'aws configure list'. This prints a table showing where the CLI is loading the Access Key and Secret Key from (e.g., environment variables, config files, or IAM role metadata)."
    }
  ],
  "helpfulResources": [
    {
      "name": "AWS IAM Access Keys documentation",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html"
    }
  ],
  "relatedErrors": [
    "expiredtoken"
  ],
  "quickFix": {
    "causes": [
      "Typo or truncation inside credentials access key string",
      "Access Key state has been set to Inactive or deleted inside IAM console",
      "Attempting to query different AWS partitions using incompatible keys"
    ],
    "checklist": [
      "Run aws configure list to verify keys origin locations",
      "Confirm the Access Key ID starts with AKIA or ASIA",
      "Verify target key is marked Active in the IAM console",
      "Clear temporary session variables overrides"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Typo or copy-paste truncation error in AWS_ACCESS_KEY_ID",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Inactive or deleted Access Key status in IAM console",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Accessing wrong AWS partition (GovCloud / China) with standard keys",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Troubleshoot InvalidClientTokenId — AWS Error Guide",
  "seoDescription": "Complete guide to fixing InvalidClientTokenId in AWS. Includes root cause analysis, step-by-step solutions, framework-specific examples, and prevention."
};

export default errorData;
