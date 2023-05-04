This is a repro for an issue with Mathlive's current exports of `ComputeEngine`. This repro was created by:

1. `create-react-app --template typescript`
2. `npm i mathlive`
3. `npm i @cortex-js/compute-engine`
4. Importing both mathlive and compute engine in the same file.
5. Trying to create an instance of the ComputeEngine class.


The problem seems to be that `mathlive` declares a module called `@cortex-js/compute-engine`, which exposes a `ComputeEngine` type. Typescript doesn't know how to merge the declared module from MathLive with the real module it finds in `node_modules`.
