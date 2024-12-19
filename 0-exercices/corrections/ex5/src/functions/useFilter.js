/**
 * 
 * @param {Array} items nos objets au format clé-valeur
 * @param {Object} criteria objet contenant les clés et valeurs
 *  que l'on souhaitent garder autrement dit la condition
 * @returns Array
 */
export const filterItems = (items, criteria) => {
    // filter() crée un nouveau tableau contenant les objets qui remplissent la condition
    return items.filter(item => {
        /**
         * Object.keys() extrait les clés de l'objet criteria (condition)
         * every itère et vérifie que chaque objet satisfait la condition pour le garder dans le tableau final
         */
        return Object.keys(criteria).every((key) => {
            const k = key
            // criteria[k] === undefined ie ignorer les clés qui n'ont pas de valeur
            // item[k] === criteria[k] vérifier la condition
            return criteria[k] === undefined || item[k] === criteria[k]
        })
    })
}