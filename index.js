const core = require("@actions/core");

async function run() {
  const projectName = core.getInput("projectname");
  const sourcePath = core.getInput("sourcepath");
  const buildPath = core.getInput("buildpath");

  try {
    console.log(`Configuration of ${projectName} started...`);
    console.log("Received the following project configuration:");
    console.log(`  - projectname: ${projectName}`);
    console.log(`  - sourcepath: ${sourcePath}`);
    console.log(`  - buildpath: ${buildPath}`);
    console.log("");

    console.log("Exporting values to the build environment...");

    core.setOutput("projectname", projectName);
    core.setOutput("sourcepath", sourcePath);
    core.setOutput("buildpath", buildPath);

    console.log("The font-setup Action completed successfully");
  } catch (error) {
    core.setFailed(`font-setup Action failed with error ${err}`);
  }
}

run();
