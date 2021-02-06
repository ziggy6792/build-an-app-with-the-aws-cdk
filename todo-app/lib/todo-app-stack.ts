import * as cdk from '@aws-cdk/core';
import * as apiGateway from '@aws-cdk/aws-apigateway';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3Deployment from '@aws-cdk/aws-s3-deployment';
import { TodoBackend } from './todo-backend';
import { SPADeploy } from 'cdk-spa-deploy';
import DbTables from './constructs/db-tables';
import utils from '../utils';

export class TodoAppStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const stageName = 'test';

    const dbTablesContruct = new DbTables(this, utils.getConstructId('db-tables', stageName), { stageName });

    // const todoBackend = new TodoBackend(this, 'TodoBackend');

    // const api = new apiGateway.LambdaRestApi(this, 'Endpoint', {
    //   handler: todoBackend.handler,
    // });

    // const logoBucket = new s3.Bucket(this, 'LogoBucket', { publicReadAccess: true });

    // new s3Deployment.BucketDeployment(this, 'DeployLogo', {
    //   destinationBucket: logoBucket,
    //   sources: [s3Deployment.Source.asset('./assets')],
    // });

    // // Output
    // new cdk.CfnOutput(this, 'LogoPath', {
    //   value: `https://${logoBucket.bucketDomainName}/my-logo.png`,
    // });

    // new cdk.CfnOutput(this, 'local-endpoint', { value: `http://localhost:4566/restapis/${api.restApiId}/prod` });

    // const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', { publicReadAccess: true, websiteIndexDocument: 'index.html' });

    // new s3Deployment.BucketDeployment(this, 'DeployWebsite', {
    //   destinationBucket: websiteBucket,
    //   sources: [s3Deployment.Source.asset('../frontend/build')],
    // });

    // new cdk.CfnOutput(this, 'Website Address', {
    //   value: websiteBucket.bucketWebsiteUrl,
    // });

    // new SPADeploy(this, 'Website Deploy').createSiteWithCloudfront({ indexDoc: 'index.html', websiteFolder: '../frontend/build' });
  }
}
