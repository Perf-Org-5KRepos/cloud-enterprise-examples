(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{rwsK:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return j}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),i=n("013z"),o=n("T0C+");n("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},s=p("PageDescription"),b=p("AnchorLinks"),c=p("AnchorLink"),u=p("InlineNotification"),m=p("Tabs"),d=p("Tab"),h={_frontmatter:r},O=i.a;function j(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(O,l({},h,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(s,{mdxType:"PageDescription"},Object(a.b)("p",null,"Use Jenkins to automate your continuous integration process")),Object(a.b)(b,{mdxType:"AnchorLinks"},Object(a.b)(c,{to:"#what-is-jekins",mdxType:"AnchorLink"},"What is Jenkins"),Object(a.b)(c,{to:"#what-is-tekton",mdxType:"AnchorLink"},"What is Tekton")),Object(a.b)("p",null,"In IBM Garage Method, one of the Develop practices is ",Object(a.b)("a",l({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/code/practice_continuous_integration/"}),"continuous integration"),". The ",Object(a.b)(o.a,{name:"env",mdxType:"Globals"})," uses a Jenkins pipeline to automate continuous integration."),Object(a.b)("h2",null,"What is continuous integration"),Object(a.b)("p",null,"Continuous integration is a software development technique where software is built regularly by a team in an automated fashion.\nThis quote helps explain it:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Continuous Integration is a software development practice where members of a team integrate their work frequently,\nusually each person integrates at least daily - leading to multiple integrations per day.\nEach integration is verified by an automated build (including test) to\ndetect integration errors as quickly as possible. Many teams find that this approach leads to significantly\nreduced integration problems and allows a team to develop cohesive software more rapidly"),Object(a.b)("cite",null,"– Martin Fowler")),Object(a.b)("h2",null,"What is Jenkins"),Object(a.b)("p",null,Object(a.b)("a",l({parentName:"p"},{href:"https://jenkins.io/"}),"Jenkins")," is a self-contained, open source automation server that can be used to automate all sorts of tasks related to building, testing, and delivering or deploying software.\nIt is a perfect tool for helping manage continuous integration tasks for a wide range of software components."),Object(a.b)("p",null,"Jenkins Pipeline (or simply “Pipeline”) is a suite of plugins that supports implementing and integrating continuous delivery pipelines into Jenkins."),Object(a.b)("p",null,"A continuous delivery pipeline is an automated expression of your process for getting software from version control right through to your users and customers."),Object(a.b)("p",null,"Jenkins Pipeline provides an extensible set of tools for modeling simple-to-complex delivery pipelines “as code.” The definition of a Jenkins Pipeline is typically written into a text file (called a ",Object(a.b)("a",l({parentName:"p"},{href:"https://jenkins.io/doc/pipeline/tour/hello-world/"}),"Jenkinsfile"),") that in turn is checked into a project’s source control repository."),Object(a.b)("h3",null,"Pipelines"),Object(a.b)("p",null,"Pipelines offer a set of stages or steps that can be chained together to allow a level of software\nautomation. This automation can be tailored to the specific project requirements."),Object(a.b)("p",null,"You can read more information about Jenkins Pipelines ",Object(a.b)("a",l({parentName:"p"},{href:"https://jenkins.io/doc/book/pipeline/"}),"here")),Object(a.b)("h3",null,"Stages"),Object(a.b)("p",null,"Pipelines are defined in a ",Object(a.b)("inlineCode",{parentName:"p"},"Jenkinsfile")," that sits in the root of your application code. It defines a number of stages. Each of the ",Object(a.b)("a",l({parentName:"p"},{href:"/cloud-enterprise-examples/codepatterns/overview"}),Object(a.b)(o.a,{name:"templates",mdxType:"Globals"}))," includes a ",Object(a.b)("inlineCode",{parentName:"p"},"Jenkinsfile")," that offers a number of stages. The stages have been configured to complete the build, test, package, and deploy of the application code. Each stage can use the defined defined ",Object(a.b)("inlineCode",{parentName:"p"},"secrets")," and ",Object(a.b)("inlineCode",{parentName:"p"},"config maps")," that were previously configured during the installation of Development cluster setup."),Object(a.b)("h2",null,"Developer Tools Pipeline"),Object(a.b)("p",null,"To enable application compatibility between Kubernetes and OpenShift, the ",Object(a.b)("inlineCode",{parentName:"p"},"Jenkinsfile")," is consistent between pipeline registration with\nboth platforms. Also, the Docker images are built from\n",Object(a.b)("a",l({parentName:"p"},{href:"https://www.redhat.com/en/blog/introducing-red-hat-universal-base-image"}),"UBI images"),"\nso that their containers can run on both platforms."),Object(a.b)("p",null,"These are the stages in the pipeline and a description of what each stage does. The ",Object(a.b)("strong",{parentName:"p"},"bold stage names")," indicate\nthe stages that are required; the ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"italics stage names"))," indicate optional stages that can be deleted or will be ignored if the tool\nsupporting the stage is not installed. These stages represent a typical production pipeline flow for a cloud-native application."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Setup"),": Clones the code into the pipeline"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Build"),": Runs the build commands for the code"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Test"),":\tValidates the unit tests for the code"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"Publish pacts")),":\tPublishes any pact contracts that have been defined"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"Sonar scan")),": Runs a sonar code scan of the source code and publishes the results to SonarQube"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Verify environment"),": Validates the OpenShift or IKS environment configuration is valid"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Build image"),": Builds the code into a Docker images and stores it in the IBM Cloud Image registry"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Deploy to DEV env"),":\tDeploys the Docker image tagged version to ",Object(a.b)("inlineCode",{parentName:"li"},"dev")," namespace using Helm Chart"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Health Check"),": Validates the Health Endpoint of the deployed application"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"Package Helm Chart")),": Stores the tagged version of the Helm chart in Artifactory"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"Trigger CD Pipeline")),": This is a GitOps stage that will update the build number in designated git repo and trigger ArgoCD for deployment to ",Object(a.b)("strong",{parentName:"li"},"test"))),Object(a.b)("h2",null,"Registering Pipelines"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The ",Object(a.b)("a",l({parentName:"p"},{href:"/cloud-enterprise-examples/ci-cd/cloud-native-codepatterns"}),Object(a.b)(o.a,{name:"templates",mdxType:"Globals"}))," are a good place to start to see how ",Object(a.b)("inlineCode",{parentName:"p"},"Jenkinsfile")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Dockerfile")," should be configured for use in a Jenkins CI pipeline. To register your git repo, use the CLI. This command automates a number of manual steps you would have to do with Jenkins, including: managing secrets, webhooks, and pipeline registration in the Jenkins tools."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"kubectl pipeline\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"By default, the pipeline will register into the current namespace and will copy all the ",Object(a.b)("inlineCode",{parentName:"p"},"configMaps")," and ",Object(a.b)("inlineCode",{parentName:"p"},"secrets")," from the ",Object(a.b)("inlineCode",{parentName:"p"},"tools")," namespace to this namespace. This means the pipeline can execute, knowing it has access to the key information that enables it to integrate with both the cloud platform and the various development tools."))),Object(a.b)("h3",null,"Registering Pipeline in new namespace"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"You can use any namespace you want to register a pipeline. Using the ",Object(a.b)("inlineCode",{parentName:"p"},"kubcectl sync")," command it will created you a new namespace for your team. It will copy the necessary ",Object(a.b)("inlineCode",{parentName:"p"},"secrets")," and ",Object(a.b)("inlineCode",{parentName:"p"},"configMaps")," into that namespace and configure the build agents pods to run in that namespace."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"kubectl sync dev-team-one --jenkins\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"You can structure multi teams squads, teams, pairs or students working in the same Development cluster given them their own namespace to work in for CI activities.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Create a template app and clone it to your Cloud Shell environment")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Then register the code with the Jenkins environment using the following command"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"kubectl pipeline\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"You will be prompted for you Git Hub Personal Access token"))),Object(a.b)("h2",null,"Continuous deployment"),Object(a.b)("p",null,"In addition to continuous integration, the ",Object(a.b)(o.a,{name:"env",mdxType:"Globals"})," also supports continuous delivery\nusing Artifactory and ArgoCD you can read up on how to use this in :"),Object(a.b)("h2",null,"What is Tekton"),Object(a.b)("p",null,"Tekton is a new emerging CI tool that has been built to support Kubernetes and OpenShift from the ground up."),Object(a.b)("p",null,Object(a.b)("a",l({parentName:"p"},{href:"https://tekton.dev/"}),"Tekton")," is a powerful yet flexible Kubernetes-native open-source framework for creating continuous integration and delivery (CI/CD) systems. It lets you build, test, and deploy across multiple cloud providers or on-premises systems by abstracting away the underlying implementation details."),Object(a.b)("h3",null,"Tekton 101"),Object(a.b)("iframe",{width:"80%",height:"315",src:"https://www.youtube.com/embed/TWxKD9dLpmk",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),Object(a.b)("p",null,"Tekton provides open-source components to help you standardize your CI/CD tooling and processes across vendors, languages, and deployment environments. Industry specifications around pipelines, releases, workflows, and other CI/CD components available with Tekton will work well with existing CI/CD tools such as Jenkins, Jenkins X, Skaffold, and Knative, among others."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Read the this this ",Object(a.b)("a",l({parentName:"p"},{href:"/cloud-enterprise-examples/guides/continuous-integration-tekton-crc#what-is-tekton"}),"Overview of Tekton"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"For more information read up about it ",Object(a.b)("a",l({parentName:"p"},{href:"https://developer.ibm.com/tutorials/knative-build-app-development-with-tekton/"}),"Tekton Tutorial"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"For more information read up about it ",Object(a.b)("a",l({parentName:"p"},{href:"https://developer.ibm.com/tutorials/knative-build-app-development-with-tekton/"}),"App Build Tutorial with Tekton")))),Object(a.b)("p",null,"The IBM Cloud is standardizing on using Tekton in both IBM Cloud DevOps\nservice and IBM Cloud Pak for Applications. OpenShift 4.2 will also natively\nsupport it."),Object(a.b)("p",null,"This guide will focus on using Tekton when the Development tools have been\ninstalled in Redhat OpenShift, IBM Kubernetes Managed services and ",Object(a.b)("strong",{parentName:"p"},"Red Hat\nCode Ready Containers")," to give you choice for you Continuous Integration\ncloud native development toolset."),Object(a.b)(u,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," This guide will help you set up the ",Object(a.b)("a",l({parentName:"p"},{href:"/cloud-enterprise-examples/codepatterns/overview"}),Object(a.b)(o.a,{name:"templates",mdxType:"Globals"}))," with  ",Object(a.b)("strong",{parentName:"p"},"Tekton")," and requires that you have installed Tekton with ",Object(a.b)("strong",{parentName:"p"},"Red Hat Code Ready Containers 4.2")," or have installed open source Tekton into the The IBM Kubernetes Cluster.")),Object(a.b)("h3",null,"Common App Tasks"),Object(a.b)("p",null,"The following gives a description of each ",Object(a.b)("inlineCode",{parentName:"p"},"Task")," that is commonly used in a\n",Object(a.b)("inlineCode",{parentName:"p"},"Pipeline"),". The ",Object(a.b)("em",{parentName:"p"},"Optional")," stages can be deleted or ignored if the tool support it is not installed. These stages represent a typical production pipeline flow for a Cloud Native application."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Setup")," clones the code into the pipeline"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Build")," runs the build commands for the code"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Test"),"\tvalidates the unit tests for the code"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Publish pacts"),"\t(",Object(a.b)("em",{parentName:"li"},"optional"),") publishes any pact contracts that have been defined"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Verify pact")," (",Object(a.b)("em",{parentName:"li"},"optional"),") verifies the pact contracts"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Sonar scan")," (",Object(a.b)("em",{parentName:"li"},"optional"),") runs a sonar code scan of the source code and publishes the results to SonarQube"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Build image")," Builds the code into a Docker images and stores it in the IBM Cloud Image registry"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Deploy to DEV env"),"\tDeploys the Docker image tagged version to ",Object(a.b)("inlineCode",{parentName:"li"},"dev")," namespace using Helm Chart"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Health Check")," Validates the Health Endpoint of the deployed application"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Package Helm Chart")," (",Object(a.b)("em",{parentName:"li"},"optional"),") Stores the tagged version of the Helm chart into Artifactory"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Trigger CD Pipeline")," (",Object(a.b)("em",{parentName:"li"},"optional"),") This is a GitOps stage that will\nupdate the build number in designated git repo and trigger ArgoCD for\ndeployment to ",Object(a.b)("strong",{parentName:"li"},"test")," namespace")),Object(a.b)("h3",null,"Install Tekton"),Object(a.b)("p",null,"Tekton can be installed in both RedHat Openshift and IBM Kubernetes manage\nservice and RedHat Code Ready Containers. To install the necessary\ncomponents follow the steps below."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Install ",Object(a.b)("a",l({parentName:"li"},{href:"/cloud-enterprise-examples/admin/overview"}),"IBM Garage for Cloud Developer Tools")," on your\nmanaged OpenShift,CRC or IKS development cluster on the IBM Cloud. This will\nhelp configure the tools and ",Object(a.b)("inlineCode",{parentName:"li"},"secrets")," and ",Object(a.b)("inlineCode",{parentName:"li"},"configMap")," to make working with\nIBM Cloud so much easier.")),Object(a.b)(m,{mdxType:"Tabs"},Object(a.b)(d,{label:"OpenShift 3.11",mdxType:"Tab"},Object(a.b)("h3",null,"IBM Cloud Pak for Applications 3.0.1"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Install Tekton on OpenShift 3.11",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Install ",Object(a.b)("a",l({parentName:"li"},{href:"https://cloud.ibm.com/catalog/content/ibm-cp-applications"}),"IBM Cloud Paks for Applications 3.0.1")," on the OpenShift Cluster from the\nIBM Cloud Catalog Software tab"))))),Object(a.b)(d,{label:"OpenShift 4.x",mdxType:"Tab"},Object(a.b)("h3",null,"Install on OpenShift 4.x"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If you have installed the IBM Garage for Cloud Developer Tools into your\ncluster this will automatically install the operator for you.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Install Tekton on OpenShift 4 including CodeReady Containers (CRC)"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Install via operator hub Administrator perspective view, click\n",Object(a.b)("strong",{parentName:"li"},"Operator Hub")," search for ",Object(a.b)("inlineCode",{parentName:"li"},"OpenShift Pipelines")," and install operator"))))),Object(a.b)(d,{label:"Kubernetes",mdxType:"Tab"},Object(a.b)("h3",null,"Install Tekton on IBM Kubernetes Managed Service"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Install Tekton via Knative add-on (can be found in the ",Object(a.b)("strong",{parentName:"li"},"Add On")," tab in\nthe Kubernetes managed service dashboard)\n, it includes\nTekton support by default and the Webhook extension."),Object(a.b)("li",{parentName:"ul"},"Install ",Object(a.b)("a",l({parentName:"li"},{href:"https://github.com/tektoncd/dashboard#install-dashboard"}),"Tekton Dashboard")," follow the instructions in the ",Object(a.b)("inlineCode",{parentName:"li"},"README.md")),Object(a.b)("li",{parentName:"ul"},"Add Ingress endpoint for the ",Object(a.b)("strong",{parentName:"li"},"Tekton Dashboard")," add a host name that uses\nthe IKS cluster subdomain",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{className:"language-yaml"}),"  apiVersion: extensions/v1beta1\n  kind: Ingress\n  metadata:\n    name: tekton-dashboard\n    namespace: tekton-pipelines\n  spec:\n    rules:\n    - host: tekton-dashboard.showcase-dev-iks-cluster.us-south.containers.appdomain.cloud\n      http:\n        paths:\n        - backend:\n            serviceName: tekton-dashboard\n            servicePort: 9097\n"))),Object(a.b)("li",{parentName:"ul"},"Install ",Object(a.b)("a",l({parentName:"li"},{href:"https://github.com/tektoncd/experimental/tree/master/webhooks-extension#install-webhook-extension"}),"Tekton Webhook Extension"))))),Object(a.b)("h3",null,"Setup Tekton"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Install Tekton pipelines and tasks into the ",Object(a.b)("inlineCode",{parentName:"li"},"dev")," namespace following the\ninstructions in the repository ",Object(a.b)("a",l({parentName:"li"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-tekton-tasks/blob/master/README.md"}),"ibm-garage-tekton-tasks")),Object(a.b)("li",{parentName:"ul"},"Install the ",Object(a.b)("inlineCode",{parentName:"li"},"Tasks"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"kubectl create -f ibm-garage-tekton-tasks/tasks/ -n dev\n"))),Object(a.b)("li",{parentName:"ul"},"Install the ",Object(a.b)("inlineCode",{parentName:"li"},"Pipelines"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"kubectl create -f ibm-garage-tekton-tasks/pipelines/ -n dev\n")))),Object(a.b)("h3",null,"Configure namespace for development"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Install the Tekton CLI ",Object(a.b)("inlineCode",{parentName:"p"},"tkn")," ",Object(a.b)("a",l({parentName:"p"},{href:"https://github.com/tektoncd/cli"}),"https://github.com/tektoncd/cli"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Create a new namespace (ie ",Object(a.b)("inlineCode",{parentName:"p"},"dev-{initials}"),") and copy all config and secrets"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{}),"igc namespace -n {new-namespace}\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Set your ",Object(a.b)("inlineCode",{parentName:"p"},"new-namespace")," the current namespace context"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{}),"oc project {new-namespace}\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The template ",Object(a.b)("inlineCode",{parentName:"p"},"Pipelines")," provided support for ",Object(a.b)("inlineCode",{parentName:"p"},"Java")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Node.js")," based apps. You can configure your own custom ",Object(a.b)("inlineCode",{parentName:"p"},"Tasks")," for other runtimes. There are a number of default ",Object(a.b)("inlineCode",{parentName:"p"},"Tasks")," to get you started they are detailed above. To create an application use one of the provided ",Object(a.b)("a",l({parentName:"p"},{href:"/cloud-enterprise-examples/codepatterns/overview"}),Object(a.b)(o.a,{name:"templates",mdxType:"Globals"}))," these templates work seamlessly with the ",Object(a.b)("inlineCode",{parentName:"p"},"Tasks")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Pipelines")," provided."))),Object(a.b)("h3",null,"Register the App with Tekton"),Object(a.b)("p",null,"With Tetkon enabled and your default ",Object(a.b)("inlineCode",{parentName:"p"},"Tasks")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Pipelines")," installed into\nthe ",Object(a.b)("inlineCode",{parentName:"p"},"dev")," namespace. You can now configure your applications to be built, packaged, tested and deployed to your OpenShift or Kubernetes development cluster."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Connect to the pipeline. (See the ",Object(a.b)("a",l({parentName:"p"},{href:"/cloud-enterprise-examples/getting-started/cli"}),"IGC CLI")," for details about how the ",Object(a.b)("inlineCode",{parentName:"p"},"pipeline")," command works.)"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"igc pipeline -n dev-{initials} --tekton\n")))),Object(a.b)("h3",null,"Verify the pipeline"),Object(a.b)("p",null,"To validate your pipeline have been correctly configured, and has triggered a\n",Object(a.b)("inlineCode",{parentName:"p"},"PipelineRun"),"\nuse the following ",Object(a.b)("strong",{parentName:"p"},"Tekton")," dashboards or ",Object(a.b)("inlineCode",{parentName:"p"},"tkn")," CLI to validate it ran\ncorrectly without errors."),Object(a.b)(m,{mdxType:"Tabs"},Object(a.b)(d,{label:"OpenShift 4.x",mdxType:"Tab"},Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Review you ",Object(a.b)("strong",{parentName:"p"},"Pipeline")," in the OpenShift 4.x Console\n",Object(a.b)("img",l({parentName:"p"},{src:"/images/pipeline.png",alt:"Pipelinerun"})))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Review your ",Object(a.b)("strong",{parentName:"p"},"Tasks"),"\n",Object(a.b)("img",l({parentName:"p"},{src:"/images/tasks.png",alt:"Tasks"})))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Review your ",Object(a.b)("strong",{parentName:"p"},"Steps"),"\n",Object(a.b)("img",l({parentName:"p"},{src:"/images/steps.png",alt:"Steps"})))))),Object(a.b)(d,{label:"Opensource Tekton Dashboard",mdxType:"Tab"},Object(a.b)("p",null,"If you are running Tekton with IBM Cloud Pak for Applications or Knative with\nKubernetes managed service your dashboard view will look similar to below."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Review your ",Object(a.b)("strong",{parentName:"li"},"Pipeline"),Object(a.b)("img",l({parentName:"li"},{src:"/images/pipeline-os.png",alt:"PipelineRun"}))))),Object(a.b)(d,{label:"Tekton CLI",mdxType:"Tab"},Object(a.b)("p",null,"If you are running ",Object(a.b)("strong",{parentName:"p"},"Tekton")," with IBM Cloud Pak for Applications or Knative\nwith Kubernetes managed service your dashboard view will look similar to below."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Review your ",Object(a.b)("strong",{parentName:"li"},"Pipeline"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"tkn pipelinerun list\n"))),Object(a.b)("li",{parentName:"ul"},"Review ",Object(a.b)("strong",{parentName:"li"},"Pipeline")," details",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"tkn pipelinerun describe {pipeline-name}\n")))))),Object(a.b)("h3",null,"Running Application"),Object(a.b)("p",null,"Once the ",Object(a.b)("strong",{parentName:"p"},"Tekton")," pipeline has successfully completed you can validate your\napp has been successfully deployed."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Open the OpenShift Console and select the {new-namespace} project and click on ",Object(a.b)("strong",{parentName:"p"},"Workloads"),"\n",Object(a.b)("img",l({parentName:"p"},{src:"/images/openshiftconsole.png",alt:"OpenShift"})))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Get the hostname for the application from ingress"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"kubectl get ingress --all-namespace\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"You can use the the ",Object(a.b)("inlineCode",{parentName:"p"},"igc")," command to get the name of the deployed application"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"igc ingress -n {new-namespace}\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Use the application URL to open it your browser for testing"))),Object(a.b)("p",null,"Once you become familiar with deploying code into OpenShift using ",Object(a.b)("strong",{parentName:"p"},"Tekton\n"),", read up about how you can manage code deployment with ",Object(a.b)("inlineCode",{parentName:"p"},"Continuous\n Delivery")," with ",Object(a.b)("inlineCode",{parentName:"p"},"ArgoCD")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Artifactory")))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ci-cd-cloud-native-ci-tools-index-mdx-a91f982de7864217c3bf.js.map