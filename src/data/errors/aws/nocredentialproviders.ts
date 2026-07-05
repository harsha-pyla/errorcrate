import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "nocredentialproviders",
  "name": "NoCredentialProviders",
  "category": "aws",
  "badges": [
    "Go SDK",
    "Terraform",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the Go SDK or Terraform AWS provider fails to retrieve credentials from any configured credential providers in the chain.",
  "meanDescription": "A 'NoCredentialProviders' error (often formatted as 'NoCredentialProviders: no valid providers in chain. Deprecated.') is raised by the AWS SDK for Go or HashiCorp Terraform when they initialize a session but fail to locate valid credentials. Because Go SDK and Terraform execute in isolated runtime environments (like CI/CD pipelines, Docker containers, or serverless functions), they search environment variables, config files, and IAM metadata endpoints. If the search reaches the end of the chain empty, it triggers this error.",
  "causes": [
    "Missing environment variables in CI/CD runners: Pipeline jobs (like GitHub Actions, GitLab CI) run Terraform without exporting the required AWS credentials.",
    "Docker container filesystem isolation: The containerized application runs without mounting the host's '~/.aws/' configuration directories.",
    "Terraform provider block mismatch: The Terraform code specifies a profile name or role ARN that does not match the active shell configuration."
  ],
  "solutions": [
    "Inject environment variables: Export 'AWS_ACCESS_KEY_ID' and 'AWS_SECRET_ACCESS_KEY' in the CI/CD job or shell environment.",
    "Mount host credentials in Docker: Run Docker containers with volume mappings ('-v ~/.aws:/root/.aws:ro') to pass credentials safely.",
    "Define provider parameters in Terraform: Explicitly configure access keys or assume-role parameters in the 'provider \"aws\"' block."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Error: Fail to retrieve credentials: NoCredentialProviders: no valid providers in chain. Deprecated.\n\tFor verbose messaging see aws.Config.CredentialsChainVerboseErrors",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Running Terraform plan without exporting credentials\nterraform plan",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Error: error configuring Terraform AWS Provider: no valid credential sources for Terraform AWS Provider found.\n\nPlease see https://registry.terraform.io/providers/hashicorp/aws for more information.",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Terraform Provider config",
      "language": "hcl",
      "description": "Configure the AWS Provider block to dynamically assume an IAM execution role using active session contexts.",
      "code": "provider \"aws\" {\n  region = \"us-west-2\"\n  # Configure assume role to bypass local credentials keys issues\n  assume_role {\n    role_arn     = \"arn:aws:iam::123456789012:role/terraform-execution-role\"\n    session_name = \"TerraformSession\"\n  }\n}"
    },
    {
      "name": "GitHub Actions Auth",
      "language": "yaml",
      "description": "Configure GitHub Actions workflows to authenticate to AWS using OpenID Connect (OIDC) to avoid static keys.",
      "code": "name: Terraform Deployment\non: [push]\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    permissions:\n      id-token: write # Required for OIDC federation\n      contents: read\n    steps:\n    - name: Configure AWS Credentials\n      uses: aws-actions/configure-aws-credentials@v4\n      with:\n        role-to-assume: arn:aws:iam::123456789012:role/github-actions-role\n        aws-region: us-west-2\n    - name: Run Terraform\n      run: |\n        terraform init\n        terraform plan"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Mount local host credentials folder inside Docker container run command contexts.",
      "code": "# Mount host configurations read-only into root directory of container\ndocker run -it -v ~/.aws:/root/.aws:ro golang-app-runner"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Verify environment variables exist inside Windows PowerShell.",
      "code": "# Print active credentials variables\nGet-ChildItem Env: | Where-Object { $_.Name -like \"*AWS_*\" }"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Verify local AWS profiles lists.",
      "code": "aws configure list-profiles"
    }
  ],
  "commonMistakes": [
    "Hardcoding static secrets inside configuration repositories, causing security auditing software to quarantine files.",
    "Forgetting to mount host profiles when calling Go containerized executables."
  ],
  "prevention": [
    "Always prefer OIDC role assumption configurations in CI/CD runner pipelines.",
    "Verify credentials loading behavior locally prior to deployment tasks."
  ],
  "faq": [
    {
      "question": "What is the NoCredentialProviders error?",
      "answer": "This is the Go SDK and Terraform equivalent of 'Unable to locate credentials'. It means the AWS client chain looked through environment variables, credentials files, and metadata endpoints but found no valid credentials."
    },
    {
      "question": "How do I solve this error in Terraform?",
      "answer": "You can either export standard environment variables ('AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY') in your terminal before running 'terraform plan', or define them inside the Terraform provider block. Using environment variables is highly recommended to avoid hardcoding keys in your code."
    },
    {
      "question": "How do I fix this error in GitHub Actions?",
      "answer": "Use the official 'aws-actions/configure-aws-credentials' action to authenticate. This action uses OpenID Connect (OIDC) to assume an IAM role dynamically, injecting temporary session keys into the runner environment so Terraform can find them."
    },
    {
      "question": "Why does it say 'Deprecated' in the error message?",
      "answer": "Legacy Go SDK v1 returns 'NoCredentialProviders: no valid providers in chain. Deprecated.' when it fails. The Go SDK v2 returns more specific errors detailing which provider failed, but the root cause remains the same: a completely empty credential chain."
    }
  ],
  "helpfulResources": [
    {
      "name": "HashiCorp Terraform AWS Provider Authentication guide",
      "url": "https://registry.terraform.io/providers/hashicorp/aws/latest/docs#authentication-and-configuration"
    }
  ],
  "relatedErrors": [
    "unable-to-locate-credentials"
  ],
  "quickFix": {
    "causes": [
      "CI/CD runners run Go/Terraform jobs without exporting active credentials",
      "Docker containers execute binaries without credentials directories mounts",
      "Mismatched profile parameters defined inside Terraform provider blocks"
    ],
    "checklist": [
      "Export AWS_ACCESS_KEY_ID variables to shell contexts",
      "Configure OIDC federation for pipeline jobs integration",
      "Mount local ~/.aws credentials folder inside Docker run commands",
      "Verify profile attributes inside provider declarations"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Missing AWS environment variables in CI/CD pipeline runners",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Terraform provider profile name typo or mismatch",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Docker container filesystem isolation (missing ~/.aws mount)",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "NoCredentialProviders Error: Root Causes & Verified Fixes",
  "seoDescription": "Troubleshoot NoCredentialProviders in AWS with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this error in your."
};

export default errorData;
