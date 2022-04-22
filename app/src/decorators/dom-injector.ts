export function domInjector(seletor: string){
  return function (target: any, propertyKey:string){
    console.log(`modificando o prototype ${target.constructor.name}
      e adicionando getter para a propriedade ${propertyKey}`);

      let elemento: HTMLElement;
      
      const getter = function(){
        if (!elemento){
          elemento = <HTMLElement>document.querySelector(seletor)
          console.log(`busacando elemento do Dom com o seletor ${seletor} para injetar em ${propertyKey}`)
        }
      return elemento;
    }

    Object.defineProperty(
      target, 
      propertyKey, 
      { get: getter } /*  Criando um getter das propriedades */
    );
  }
}
