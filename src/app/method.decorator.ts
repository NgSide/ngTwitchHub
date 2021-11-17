export function Confirmation(message: string) {
    function factory(
      target: Object, // Parent class
      key: string, // Name of the function
      descriptor: PropertyDescriptor // The function
    ) {
      const original = descriptor.value;
       descriptor.value = function (...args: any[]) {
        // Résultat de la fonction originale
        const reponse = confirm(message);
        if (reponse) {
            const result = original.apply(this, args);
            console.log('youpi');
            console.log('Données du formulaire envoyées!');
            return result;
          } else {
            return null;
            console.log('dommage');
          }
      };
      return descriptor;
    }
    return factory;
 }
 