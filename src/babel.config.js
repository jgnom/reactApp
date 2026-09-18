export default {
    presets: [
        ["babel/preset-env", { targets: { node: "current" }}],
        ["babel/preset-env", { runtime: "automatic" }],
    ]
};