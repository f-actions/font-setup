const core = require("@actions/core");

async function run() {
  const projectName = core.getInput("projectname");
  const sourcePath = core.getInput("sourcepath");
  const buildPath = core.getInput("buildpath");
  const licensePath = core.getInput("licensepath");
  const readmePath = core.getInput("readmepath");
  const changelogPath = core.getInput("changelogpath");
  const pyVersion = core.getInput("py-version");
  const depPath = core.getInput("deppath");
  const devDepPath = core.getInput("devdeppath");

  try {
    console.log(`Configuration of ${projectName} started...`);
    console.log("Received the following project configuration:");
    console.log(`  - projectname: ${projectName}`);
    console.log(`  - sourcepath: ${sourcePath}`);
    console.log(`  - buildpath: ${buildPath}`);
    console.log(`  - readmepath: ${readmePath}`);
    console.log(`  - licensepath: ${licensePath}`);
    console.log(`  - changelogpath: ${changelogPath}`);
    console.log(`  - py-version: ${pyVersion}`);
    console.log(`  - deppath: ${depPath}`);
    console.log(`  - devdeppath: ${devDepPath}`);
    console.log("");

    console.log("Exporting values to the build environment...");

    core.setOutput("projectname", projectName);
    core.setOutput("sourcepath", sourcePath);
    core.setOutput("buildpath", buildPath);
    core.setOutput("readmepath", readmePath);
    core.setOutput("licensepath", licensePath);
    core.setOutput("changelogpath", changelogPath);
    core.setOutput("py-version", pyVersion);
    core.setOutput("deppath", depPath);
    core.setOutput("devdeppath", devDepPath);

    console.log("The font-setup Action completed successfully");
  } catch (error) {
    core.setFailed(`font-setup Action failed with error ${err}`);
  }
}

run();
