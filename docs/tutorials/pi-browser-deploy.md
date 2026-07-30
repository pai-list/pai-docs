# Deploy to Pi Browser

Serve your agent’s public interface over HTTPS with a mobile-first flow. The browser client should request user approval for wallet actions and never receive signing secrets.

## Release checklist

- Test on a physical device and slow connection.
- Use deep links only after validating their destination.
- Show a readable invoice before payment approval.
- Return a receipt page that can be reopened later.
