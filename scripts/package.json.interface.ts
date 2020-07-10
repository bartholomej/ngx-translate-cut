export interface PackageJson {
  name: string;
  description: string;
  version: string;
  author: string;
  homepage: string;
  license: string;
  repository: PackageJsonUrlType;
  bugs: PackageJsonBugs;
  keywords: string[];
  funding: PackageJsonUrlType;
  publishConfig: PackageJsonFundingsPublishConfig;
  // [k: string]: any;
}

interface PackageJsonUrlType {
  url: string;
  type: string;
}

interface PackageJsonBugs {
  url: string;
}

interface PackageJsonFundingsPublishConfig {
  registry: string;
}
