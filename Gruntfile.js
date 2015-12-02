const grunt = require('grunt');

grunt.initConfig({
  git_changelog: {
    minimal: {
      options: {
        tag: "v0.1.0",
        file: "CHANGELOG.md",
        app_name: "React Stack Overflow Profile"
      }
    }
  }
});

grunt.loadNpmTasks('git-changelog');
grunt.task.registerTask('default', ['git_changelog']);
