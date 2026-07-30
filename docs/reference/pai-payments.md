# @pai/payments

The payments package creates quotes, invoices, and settlement receipts.

```ts
const invoice = await payments.createInvoice({
  amount: '2',
  asset: 'PI',
  expiresIn: '15m',
  metadata: { orderId },
});
```

Listen for verified settlement events and use `invoice.id` for idempotency. Amount values are strings to avoid floating-point loss.
