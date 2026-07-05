import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "bucketalreadyexists",
  "name": "BucketAlreadyExists",
  "category": "aws",
  "badges": [
    "Amazon S3",
    "Bucket Error",
    "Medium Priority"
  ],
  "updatedAt": "June 30, 2026",
  "shortDescription": "This error occurs when you attempt to create an S3 bucket with a name that is already taken by another AWS account globally.",
  "meanDescription": "A 'BucketAlreadyExists' error is returned by Amazon S3 when you attempt to create a bucket with a name that is already in use by another AWS account. S3 bucket namespaces are globally shared across all AWS accounts worldwide. Once a bucket name is taken in any region by any account, it remains unavailable to all other accounts until it is deleted by its owner.",
  "causes": [
    "Global bucket namespace conflict: The requested name has already been registered globally by another AWS customer.",
    "Delayed deletion propagation: A bucket with the same name was recently deleted, but the name release has not yet propagated globally.",
    "Shared template collision: Infrastructure scripts (like Terraform or CloudFormation) use static prefix strings (e.g. 'my-app-bucket') that are popular."
  ],
  "solutions": [
    "Add unique identifiers: Prepend or append random hash values or account IDs to the bucket name (e.g. 'company-prod-logs-8f2e91').",
    "Use dynamic naming variables: In Terraform or CloudFormation, generate bucket names dynamically utilizing resource hashes or prefix configurations.",
    "Verify name availability: Run 'aws s3api head-bucket' to check if a bucket name is already active prior to creation calls."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "An error occurred (BucketAlreadyExists) when calling the CreateBucket operation: The requested bucket name is not available. The bucket namespace is shared by all users of the system. Please select a different name and try again.",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Attempting to create an S3 bucket using a common taken name\naws s3api create-bucket --bucket logs --region us-east-1",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "An error occurred (BucketAlreadyExists) when calling the CreateBucket operation: The requested bucket name is not available. The bucket namespace is shared by all users of the system. Please select a different name and try again.\n$ echo $?\n254",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Terraform Dynamic Name",
      "language": "hcl",
      "description": "Utilize random suffixes or prefix parameters in Terraform to guarantee global bucket name uniqueness.",
      "code": "resource \"random_id\" \"bucket_suffix\" {\n  byte_length = 4\n}\n\nresource \"aws_s3_bucket\" \"app_logs\" {\n  # 1. Option A: Generate unique bucket name dynamically\n  bucket = \"my-company-prod-logs-${random_id.bucket_suffix.hex}\"\n\n  # 2. Option B: Instruct AWS to auto-generate suffix\n  # bucket_prefix = \"my-company-prod-logs-\"\n}"
    },
    {
      "name": "Checking Bucket Availability",
      "language": "bash",
      "description": "Probe if a bucket name is already taken prior to deploying templates.",
      "code": "# Test if bucket exists (returns 200/403 if taken, 404 if available)\n$ aws s3api head-bucket --bucket my-desired-bucket-name"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Check name existence and return status details using bash scripts.",
      "code": "# Run head-bucket check and catch errors\nif aws s3api head-bucket --bucket \"logs\" 2>/dev/null; then\n  echo \"Bucket name is taken by your account or another account.\"\nelse\n  echo \"Bucket name might be available or owned by someone else (returns 403/404).\"\nfi"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Verify bucket names availability using PowerShell.",
      "code": "# Query status check on Windows client\ntry {\n    aws s3api head-bucket --bucket \"logs\"\n    Write-Host \"Bucket is registered.\"\n} catch {\n    Write-Host \"Bucket not accessible or not found.\"\n}"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Verify S3 bucket region parameters.",
      "code": "aws s3api get-bucket-location --bucket my-secure-bucket"
    }
  ],
  "commonMistakes": [
    "Hardcoding generic bucket names (like `test-bucket`, `logs`, `database-backup`) in production templates.",
    "Assuming that bucket name constraints only apply to the active AWS Region (S3 bucket names must be unique globally across all AWS regions)."
  ],
  "prevention": [
    "Adopt organizational bucket naming conventions that append account IDs and regions to names.",
    "Leverage prefix configurations in infrastructure tools to prevent naming collision issues."
  ],
  "faq": [
    {
      "question": "Why do S3 bucket names have to be globally unique?",
      "answer": "Amazon S3 is a globally distributed object store. Buckets can be accessed directly via DNS endpoints (e.g. 'bucket-name.s3.amazonaws.com'). To ensure DNS routing and resolution work globally, S3 enforces a strict, global namespace."
    },
    {
      "question": "What is the difference between BucketAlreadyExists and BucketAlreadyOwnedByYou?",
      "answer": "BucketAlreadyExists means the bucket name is taken by another AWS account. BucketAlreadyOwnedByYou means the bucket name was already created by your AWS account (either in the same region or a different region)."
    },
    {
      "question": "How long does it take for a deleted bucket name to become available again?",
      "answer": "It typically takes a few hours for the namespace deletion to propagate globally, though in some cases it can take up to 24 hours. During this period, attempting to recreate the bucket will return a BucketAlreadyExists or similar error."
    },
    {
      "question": "How do I generate unique bucket names in Terraform?",
      "answer": "Use the 'random_id' resource in Terraform to append a random hexadecimal suffix, or use the 'bucket_prefix' attribute inside the 'aws_s3_bucket' resource, which instructs AWS to automatically append a unique suffix."
    }
  ],
  "helpfulResources": [
    {
      "name": "Amazon S3 Bucket Naming Rules guide",
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html"
    }
  ],
  "relatedErrors": [
    "bucketalreadyownedbyyou"
  ],
  "quickFix": {
    "causes": [
      "Desired S3 bucket name is already registered by another AWS account globally",
      "Generic suffix strings cause collision with existing S3 public endpoints",
      "Delayed global DNS propagation of recently deleted S3 bucket namespaces"
    ],
    "checklist": [
      "Append random alphanumeric strings or account ID numbers to bucket name",
      "Check bucket availability using aws s3api head-bucket",
      "Adopt bucket_prefix parameter in Terraform plans",
      "Wait 24 hours if trying to reuse a recently deleted bucket name"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Generic or common naming string already taken globally",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Automated deployment script re-running without dynamic naming suffix",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Delayed propagation of recently deleted bucket names",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Resolve BucketAlreadyExists — AWS Debugging Guide",
  "seoDescription": "Resolve BucketAlreadyExists in AWS with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and community-verified."
};

export default errorData;
