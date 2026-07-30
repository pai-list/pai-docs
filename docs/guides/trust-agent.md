# Build a trust agent

A trust agent transforms verified signals into a policy-specific recommendation. Treat scores as decision support—not a universal measure of a person or service.

Use weighted, explainable signals and return the source assertions with the score. Recompute scores when inputs expire instead of silently carrying old reputation forward.

```ts
const score = trust.evaluate({ assertions, policy: 'merchant-v1' });
return { score: score.value, factors: score.explanation };
```
