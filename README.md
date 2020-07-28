# Destination

**Destination is a style sheet that makes website prototypes look beautiful.**

The styles are derived from the utility-first [Tailwind CSS][twUrl] framework.
This allows nearly unlimited flexibility while prototyping websites. However,
unlike Tailwind, Destination also applies styles from the
[Tailwind Typography][ttUrl] plugin directly to certain HTML elements. You can
still modify most of the base styles by adding utility classes but the base
styles are meant to free you from having to do that. You can see the Tailwind
Typography [demo using Destination here](https://destination.ianwalter.dev/demo).

[twUrl]: https://tailwindcss.com/
[ttUrl]: https://tailwindcss-typography.netlify.app/

Destination is meant to be used when presentation and effort matter more than
bandwidth so it's probably pretty large compared to other style sheets you're
used to (97KB gzipped). You can reduce the size if necessary by purging unused
styles but in most cases it's meant to be loaded via CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/@ianwalter/destination@1.0.2/destination.min.css">
```

Destination will also contain some basic component classes in addition to the
ones provided by Tailwind.

## Buttons

### Default Button

```html
<button class="button">
  Button Label
</button>
```

### Color Variants

```html
<a class="button button-blue">
  Button Label
</a>
```

## License

Hippocratic License - See [LICENSE][licenseUrl]

&nbsp;

Created by [Ian Walter](https://ianwalter.dev)

[licenseUrl]: https://github.com/ianwalter/destination/blob/master/LICENSE
