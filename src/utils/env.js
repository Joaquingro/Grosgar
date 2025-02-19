export const getEnvVar = (key, defaultValue = '') => {
    const value = import.meta.env[key] || defaultValue;
    if (!value) {
      console.warn(`⚠️ Falta la variable de entorno: ${key}`);
    }
    return value;
  };
  