# Skills

A skill is a versioned capability with an input schema, output schema, and permission declaration. Skills can be local packages or remotely resolved, but their behavior must remain inspectable.

```ts
export const summarize = defineSkill({
  name: 'summarize-text',
  permissions: ['model:generate'],
  input: z.object({ text: z.string().max(12000) }),
  execute: ({ text }) => model.summarize(text),
});
```

Pin a compatible version, validate all boundaries, and expose failures as structured errors. See [testing agents](/guides/testing-agents) for a practical test strategy.
