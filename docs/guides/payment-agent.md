# Build a payment agent

Payments should be quoted before work starts and settled against a unique invoice. The invoice ID is your idempotency key: never fulfill the same invoice twice.

```ts
const invoice = await payments.quote({
  amount: '1.25',
  asset: 'PI',
  description: 'Research brief',
});
return { invoiceId: invoice.id, paymentUrl: invoice.url };
```

Verify settlement from a trusted server-side callback, then issue a signed fulfillment receipt.
