# Movimento Ler para Ser

Site institucional do **Movimento Ler para Ser** — um movimento que leva literatura e experiências culturais a crianças, despertando imaginação, criatividade e novas possibilidades de vida.

> "Formar por meio da leitura. Transformar por meio da arte."

Desenvolvido por **SUPERFLUX**.

## Tecnologias

- Vite
- TypeScript
- React
- shadcn/ui
- Tailwind CSS

## Rodando localmente

Requer Node.js e npm instalados ([instale com nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

```sh
# Clone o repositório
git clone https://github.com/LerParaSer/movimento-ler-arte.git

# Entre na pasta do projeto
cd movimento-ler-arte

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site ficará disponível em `http://localhost:8080`.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Gera o build de produção em `dist/` |
| `npm run build:dev` | Build em modo development |
| `npm run preview` | Serve localmente o build de produção |
| `npm run lint` | Roda o ESLint no projeto |

## Estrutura

```
src/
├── assets/       # Imagens e logos
├── components/   # Componentes da página (Header, Footer, seções)
│   └── ui/       # Componentes base do shadcn/ui
├── hooks/        # Hooks reutilizáveis
├── lib/          # Utilitários
└── pages/        # Páginas roteadas
```

## Deploy

O projeto gera um site estático. Basta rodar `npm run build` e publicar o conteúdo da pasta `dist/` em qualquer hospedagem estática (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).

---

© Movimento Ler para Ser. Site por SUPERFLUX.
