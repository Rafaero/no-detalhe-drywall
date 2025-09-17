# No Detalhe Drywall — site estático

Pronto para publicar no **GitHub Pages**.

## Como publicar

1. Crie um repositório (ex.: `no-detalhe-drywall`).
2. Envie estes arquivos para a raiz do repositório:
   - `index.html`
   - `styles.css`
   - `script.js`
   - pasta `assets/` (todas as imagens).
3. No GitHub, vá em **Settings → Pages** e selecione:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (ou `master`) / pasta `/root`
4. Aguarde a página ficar no ar. A URL será algo como:
   `https://SEU_USUARIO.github.io/no-detalhe-drywall/`

### Personalização rápida
- **WhatsApp**: edite em `index.html` a linha `window.WHATSAPP_NUMBER = "5535999999999"`
  usando apenas dígitos (DDI + DDD + número).
- **Título/descrição**: edite as metatags no `<head>`.
- **Cores**: ajuste variáveis em `styles.css` (ex.: `--brand`).

---

Feito com HTML/CSS/JS puro (sem dependências externas) para carregar rápido e
funcionar bem em celulares.
