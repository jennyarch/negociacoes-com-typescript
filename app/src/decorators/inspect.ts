export function inspect() {
  return function(
    target: any,
    propertyKey: string, /* refere-se a propriedade da classe */
    descriptor: PropertyDescriptor
  ){
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`--- Metodo ${propertyKey}`);
      console.log(`----- parêmetros:  ${JSON.stringify(args)}`);
      const retorno = metodoOriginal.apply(this, args);
      console.log(`----- retorno: ${JSON.stringify(retorno)}`);
      return retorno;
    }
    return descriptor;
  }
}