import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "accessdenied",
  "name": "AccessDenied",
  "category": "aws",
  "badges": [
    "Amazon S3",
    "IAM Policy",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when Amazon S3 rejects a bucket or object request due to insufficient S3 bucket policies, ACLs, or KMS key permissions.",
  "meanDescription": "An 'AccessDenied' error is returned by Amazon S3 when a request lacks authorization. S3 evaluates a combination of identity-based policies (IAM policies), resource-based policies (S3 Bucket Policies, S3 Access Points), Access Control Lists (ACLs), and KMS key policies. In modern AWS environments, S3 Object Ownership defaults to 'Bucket owner enforced', which disables ACLs entirely and consolidates control inside IAM and Bucket policies.",
  "causes": [
    "Bucket Policy Restriction: S3 Bucket Policies explicitly deny public or cross-account access, overriding IAM rules.",
    "KMS Key Decryption Block: The target object is encrypted with a custom KMS key, and the calling user lacks 'kms:Decrypt' permissions on that KMS key.",
    "S3 Block Public Access is enabled: Attempts to read or write objects using public ACLs are blocked by active bucket-level Block Public Access settings."
  ],
  "solutions": [
    "Verify S3 Bucket Policy: Review S3 bucket policies and ensure the calling role ARN is permitted.",
    "Configure KMS policy delegation: Add the caller role to the KMS Key policy under 'Allow' for 'kms:Decrypt' / 'kms:GenerateDataKey'.",
    "Audit S3 Block Public Access configurations: Turn off Block Public Access settings only if public read/write access is explicitly required."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "An error occurred (AccessDenied) when calling the GetObject operation: Access Denied",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Accessing encrypted S3 object without KMS decrypt rights\naws s3 cp s3://my-secure-bucket/secret.txt .",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "download failed: s3://my-secure-bucket/secret.txt to ./secret.txt An error occurred (AccessDenied) when calling the GetObject operation: Access Denied",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "S3 Bucket Policy Fix",
      "language": "json",
      "description": "Configure an S3 Bucket Policy to explicitly authorize a cross-account IAM role to read objects.",
      "code": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Sid\": \"CrossAccountRead\",\n      \"Effect\": \"Allow\",\n      \"Principal\": {\n        \"AWS\": \"arn:aws:iam::111122223333:role/application-execution-role\"\n      },\n      \"Action\": [\n        \"s3:GetObject\",\n        \"s3:ListBucket\"\n      ],\n      \"Resource\": [\n        \"arn:aws:s3:::my-secure-bucket\",\n        \"arn:aws:s3:::my-secure-bucket/*\"\n      ]\n    }\n  ]\n}"
    },
    {
      "name": "KMS Key Policy Fix",
      "language": "json",
      "description": "Add KMS Decryption rules inside custom KMS Key Policies to allow the application role to read encrypted objects.",
      "code": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Sid\": \"AllowApplicationDecrypt\",\n      \"Effect\": \"Allow\",\n      \"Principal\": {\n        \"AWS\": \"arn:aws:iam::111122223333:role/application-execution-role\"\n      },\n      \"Action\": [\n        \"kms:Decrypt\",\n        \"kms:DescribeKey\"\n      ],\n      \"Resource\": \"*\"\n    }\n  ]\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Retrieve S3 bucket policy and block public access settings using S3API commands.",
      "code": "# 1. Inspect bucket policy configuration\naws s3api get-bucket-policy --bucket my-secure-bucket\n\n# 2. Check S3 Block Public Access configuration status\naws s3api get-public-access-block --bucket my-secure-bucket"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Verify object download capabilities under specific encryption contexts.",
      "code": "# Test file download check\naws s3api get-object --bucket my-secure-bucket --key secret.txt output.txt"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Verify active local profile configurations.",
      "code": "aws sts get-caller-identity"
    }
  ],
  "commonMistakes": [
    "Attaching wide IAM policies but neglecting to configure KMS Key Policies when using custom SSE-KMS keys, causing S3 to return AccessDenied on object reads.",
    "Attempting to upload objects using legacy public-read ACLs when S3 Object Ownership is set to 'BucketOwnerEnforced' (which disables ACLs and rejects the upload)."
  ],
  "prevention": [
    "Disable ACLs entirely (use BucketOwnerEnforced) and rely solely on IAM and Bucket Policies for access control.",
    "Adopt AWS S3 access analyzer tools to continuously audit bucket exposure risks."
  ],
  "faq": [
    {
      "question": "What is the difference between AccessDeniedException and AccessDenied?",
      "answer": "AccessDenied is the specific XML-based error code returned by Amazon S3. AccessDeniedException is the JSON-based exception code returned by newer AWS services like DynamoDB, Lambda, and IAM."
    },
    {
      "question": "Why do I get AccessDenied when downloading an S3 object even though my IAM policy allows s3:GetObject?",
      "answer": "This is usually caused by KMS encryption. If the object was encrypted using a custom AWS KMS Key (SSE-KMS), you must also have permissions to call 'kms:Decrypt' on that specific KMS key. Lacking KMS permissions results in an S3 AccessDenied error."
    },
    {
      "question": "What is S3 Object Ownership and how does it affect access?",
      "answer": "By default, AWS disables ACLs for new S3 buckets, enforcing 'Bucket Owner Enforced'. This means access is managed solely by IAM and S3 Bucket Policies. Legacy applications attempting to upload objects using public ACLs (like 'public-read') will fail with AccessDenied unless they disable ACL parameters or modify S3 Object Ownership settings."
    },
    {
      "question": "How do I test my bucket policy configuration using the CLI?",
      "answer": "You can retrieve the policy using the AWS CLI command: 'aws s3api get-bucket-policy --bucket <bucket-name>'. Ensure the JSON policy does not contain explicit 'Deny' statements targeting your role or IP address range."
    }
  ],
  "helpfulResources": [
    {
      "name": "Amazon S3 Access Denied Troubleshooting guide",
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/troubleshoot-403-errors.html"
    }
  ],
  "relatedErrors": [
    "accessdeniedexception"
  ],
  "quickFix": {
    "causes": [
      "IAM identity lacks read/write rights on S3 bucket path (s3:GetObject/s3:PutObject)",
      "Target object is encrypted using custom SSE-KMS, and caller lacks kms:Decrypt",
      "S3 Block Public Access configurations override public ACL directives"
    ],
    "checklist": [
      "Confirm S3 resource ARN has suffix '/*' to grant object access",
      "Check KMS key policy configuration if using custom encryption keys",
      "Disable ACL uploads if Object Ownership is set to BucketOwnerEnforced",
      "Check S3 bucket public access blocks settings"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Missing Object-Level read permission (s3:GetObject on bucket/*)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Missing kms:Decrypt permissions on target SSE-KMS key",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Block Public Access configuration overrides active public ACLs",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Fix AccessDenied in AWS — Causes & Solutions",
  "seoDescription": "Learn how to fix AccessDenied in AWS. Understand the root causes, see real code examples, and apply verified solutions to resolve this error quickly in."
};

export default errorData;
