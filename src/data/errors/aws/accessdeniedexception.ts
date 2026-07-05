import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "accessdeniedexception",
  "name": "AccessDeniedException",
  "category": "aws",
  "badges": [
    "AWS IAM",
    "Security Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when your authenticated AWS credentials do not have the required IAM permissions to perform the requested API operation.",
  "meanDescription": "An 'AccessDeniedException' is returned by AWS API services (such as DynamoDB, Lambda, S3, or IAM) when the request caller has valid authentication credentials (meaning who they are is verified) but lacks the required IAM policy authorizations (what they are allowed to do is rejected). In modern AWS IAM, authorization failures can be decrypted using the AWS STS 'DecodeAuthorizationMessage' API to inspect the exact failing policy rules.",
  "causes": [
    "Missing IAM Policy permissions: The calling IAM User or Role has no identity-based policy statement allowing the specific action (e.g. 'dynamodb:PutItem').",
    "Explicit Deny in Policy: A Service Control Policy (SCP), IAM Boundary, or Resource-based policy explicitly denies the action, which overrides all allow rules.",
    "Resource-based Policy limits: A target resource policy (like an S3 Bucket Policy or KMS Key Policy) blocks access from the calling IAM entity."
  ],
  "solutions": [
    "Attach the required IAM permission: Add an IAM Policy statement with 'Allow' effect on the target action and resource ARN.",
    "Decode authorization failure message: Use the AWS CLI command 'aws sts decode-authorization-message' to identify the exact blocking policy.",
    "Inspect Resource-based policies: Ensure target KMS key policies or S3 bucket policies grant permissions to the calling role."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "An error occurred (AccessDeniedException) when calling the PutItem operation: User: arn:aws:iam::123456789012:user/dev-user is not authorized to perform: dynamodb:PutItem on resource: arn:aws:aws:dynamodb:us-east-1:123456789012:table/ProductTable",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to write a record to DynamoDB table without IAM permission\naws dynamodb put-item --table-name ProductTable --item '{\"id\": {\"S\": \"1\"}}'",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "An error occurred (AccessDeniedException) when calling the PutItem operation: User: arn:aws:iam::123456789012:user/dev-user is not authorized to perform: dynamodb:PutItem on resource: arn:aws:aws:dynamodb:us-east-1:123456789012:table/ProductTable",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "IAM Policy Fix",
      "language": "json",
      "description": "Attach an IAM Policy to the user or execution role authorizing the specific API action on the target resource ARN.",
      "code": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"dynamodb:PutItem\",\n        \"dynamodb:GetItem\"\n      ],\n      \"Resource\": \"arn:aws:dynamodb:us-east-1:123456789012:table/ProductTable\"\n    }\n  ]\n}"
    },
    {
      "name": "Decrypted Error payload",
      "language": "json",
      "description": "Example JSON output returned after running decode-authorization-message STS command, indicating an SCP policy blocks the action.",
      "code": "{\n  \"DecodedMessage\": {\n    \"allowed\": false,\n    \"explicitDeny\": true,\n    \"matchedPolicies\": {\n      \"serviceControlPolicies\": [\n        {\n          \"policyId\": \"policy-scp-production-restrict-region\",\n          \"policyName\": \"RegionLockPolicy\"\n        }\n      ]\n    },\n    \"context\": {\n      \"action\": \"dynamodb:PutItem\",\n      \"resource\": \"arn:aws:dynamodb:us-east-1:123456789012:table/ProductTable\"\n    }\n  }\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Decode encrypted AWS authorization messages using the AWS CLI tool.",
      "code": "# Decode encrypted message (requires sts:DecodeAuthorizationMessage permission)\naws sts decode-authorization-message --encoded-message \"ENCRYPTED_STRING_GOES_HERE\""
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Verify active caller identity parameters inside Windows PowerShell.",
      "code": "# Print active AWS credential identity\naws sts get-caller-identity"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Verify AWS CLI active profile setting.",
      "code": "aws configure list"
    }
  ],
  "commonMistakes": [
    "Assuming AdministratorAccess bypasses KMS key policy restrictions (KMS keys must explicitly delegate authority to IAM or list the calling role in the key policy).",
    "Confusing Authentication (invalid keys) with Authorization (AccessDeniedException)."
  ],
  "prevention": [
    "Adopt the principle of least privilege, mapping explicit Action rules to target resource ARNs.",
    "Adopt AWS IAM Access Analyzer to detect unused or excessive resource-based access pathways."
  ],
  "faq": [
    {
      "question": "What is an AccessDeniedException in AWS?",
      "answer": "It is an authorization failure. It means AWS verified your identity (AccessKey/SecretKey), but your IAM user or role does not have the policy permissions required to perform the action."
    },
    {
      "question": "How do I decode an encoded authorization failure message?",
      "answer": "When an API call fails, AWS often returns an encrypted string in the error message. If your user has permission to decode, run: 'aws sts decode-authorization-message --encoded-message <message-string>'. This returns a JSON payload showing exactly which policy block (like an SCP or boundary) caused the deny."
    },
    {
      "question": "Why does my API call fail even though my IAM user has AdministratorAccess?",
      "answer": "Check if the resource (like an S3 bucket or KMS key) has a resource-based policy that explicitly denies your account. Explicit denies always override allows. Also, check if you are restricted by a Service Control Policy (SCP) at the AWS Organization level."
    },
    {
      "question": "Why do KMS keys trigger AccessDeniedException?",
      "answer": "If your application reads an encrypted S3 object, it must have permission to both 's3:GetObject' and 'kms:Decrypt' on the key used for encryption. Lacking KMS permissions triggers an AccessDeniedException."
    }
  ],
  "helpfulResources": [
    {
      "name": "AWS IAM Policies and Permissions guide",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html"
    }
  ],
  "relatedErrors": [
    "expiredtoken"
  ],
  "quickFix": {
    "causes": [
      "Target IAM identity-based policy lacks allow rule for the specific API Action",
      "Service Control Policies (SCP) or permission boundaries explicitly deny the action",
      "Resource-based policies (S3 bucket policy, KMS key policy) restrict access"
    ],
    "checklist": [
      "Check active IAM user details: aws sts get-caller-identity",
      "Decode STS failure string to locate blocking policy rules",
      "Ensure KMS decryption rights exist for encrypted targets",
      "Confirm target ARNs align with policy resource strings"
    ],
    "estimatedTime": "4 minutes"
  },
  "causesTable": [
    {
      "cause": "Missing Action (e.g. lambda:InvokeFunction) in IAM Policy",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Resource-based policy (S3/KMS) explicitly blocks calling entity",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Service Control Policy (SCP) or Boundary restriction",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "AccessDeniedException: Quick Fix Guide for AWS Developers",
  "seoDescription": "Getting AccessDeniedException in AWS? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code examples to."
};

export default errorData;
