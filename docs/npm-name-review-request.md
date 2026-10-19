# npm package name review request

Status: draft, awaiting submission.

Submit through [npm Support](https://www.npmjs.com/support) while signed in to the npm account `bagombeka`. The request concerns a registry publishing restriction. The registry operator decides whether an exception is available.

## Subject

Unable to publish vuewind: package-name similarity restriction

## Message

Hello npm Support,

I maintain Vuewind, an independent Vue 3 component library, and would like a review of the registry restriction on the exact unscoped package name `vuewind`.

- npm account: `bagombeka`
- Intended package and version: `vuewind@1.0.0`
- Repository: https://github.com/BAGOMBEKA-JOB-DEV/vuewind
- Documentation: https://vuewind-two.vercel.app/
- Verified package archive: https://github.com/BAGOMBEKA-JOB-DEV/vuewind/releases/download/v1.0.0/vuewind-1.0.0.tgz
- Publication attempt: https://github.com/BAGOMBEKA-JOB-DEV/vuewind/actions/runs/39246991477

On October 19, 2026, publication passed our release validation and reached the registry with an authenticated publishing token. npm then rejected it with HTTP 403 and the message:

> Package name too similar to existing package vue-wind

After the rejection, https://registry.npmjs.org/vuewind returned HTTP 404. The existing package https://www.npmjs.com/package/vue-wind belongs to a different maintainer.

I understand that npm compares package names without punctuation. This request concerns eligibility for the unregistered name `vuewind`. We would like to preserve that exact package name for our project.

Could you review whether an exception is possible and advise what information you need? If the policy does not permit this name, please confirm the restriction so we can record the outcome accurately.

Thank you.

## References

- [npm naming policy](https://blog.npmjs.org/post/168978377570/new-package-moniker-rules.html)
- [Package name guidelines](https://docs.npmjs.com/package-name-guidelines/)

Keep npm tokens and account credentials out of the request.
