import createCache from "@emotion/cache";

export default function createEmotionCache() {
  return createCache({ key: "css", prepend: true });
}

// prepend true move os estilos do MUI para o top do <head></head> fazendo com que ele carregue primeiro
