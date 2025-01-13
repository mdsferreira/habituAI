module.exports = {
  presets: ['module:@react-native/babel-preset', "nativewind/babel"],
  plugins: [["module-resolver", {
    root: ["./"],
    extensions: [".js", ".ts", ".tsx", ".jsx"],

    alias: {
      "@": "./src",
      "@components": "./src/components",
      "@pages": "./src/pages",
      "tailwind.config": "./tailwind.config.js"
    }
  }]]
};
