# Lambda Exam - MLC

Note, this project makes several assumptions/shortcuts to complete a working version on time which would NOT be acceptable for a finished platform:

1. Although Terraform was suggested in the documentation, I instead used SST to speed up development time. This allowed me to scafold my architecture live as I built it within AWS for testing and could be maintained in native Javascript/Typescript. The configuration for SST can be found in `sst.config.ts`

2. The Weather API URL has been hard coded for readability and examination, in a real world scenario this would either be an environment variable (to allow for developer override if a new API version is supplied)

3. S3 bucket name has been hardcoded to keep the code readable for examination. In a real world scenario, the sst.config and storage.ts files should have environment variable controlled names to allow the repo to be replicated for other uses with minimal changes

4. Once I built the weather API integration, I was no longer able to live-test my code as I was not prepared to sign up for an API key, so API data response and storage code has not been tested.

5. In a real world scenario, it may be beneficial to hook a pub/sub routine into these lambdas in order to separate S3 storage steps to independant microservices, minimising impact on API call time and user experience.

6. Storage of the "API Request" as requested, in this instance is a dump of the HTTP request header/parameters for completion. In a real world scenario, isolating particularly useful data would be important to minimise PII and secure key leakage, particularily if authentication becomes involved.

## Setup

1. Install AWS CLI tools

2. Create and Log into AWS and go to your Account's security credentials page: [https://us-east-1.console.aws.amazon.com/iam/home#/security_credentials]

3. Create a new Access Key, the resulting .csv file will contain the two values for step 4. below

4. Configure AWS CLI

```shell
aws configure
```

Use the details from Step 3. and your prefered country and user account details

5. Run the project in development mode (NOTE: this will create AWS resources as defined in `sst.config.ts` within the account specified in step 4.)

```shell
npm install
npm run dev
```


## Usage

This code creates AWS


## Deployment

```shell
npm run deploy
```