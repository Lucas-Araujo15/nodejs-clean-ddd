export class Slug {
    public value: string

    constructor(value: string) {
        this.value = value
    }

    /**
     * Receives a string and normalize it as a slug
     * 
     * Example: "An example title" => "an-example-title"
     * 
     * @param text {string}
     */
    static createFromText(text: string) {
        const slugText = text
            .normalize('NFKD')
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-') // Replaces whitespace with hyphen
            .replace(/[^\w-]+/g, '') // Removes everything that is not words
            .replace(/_/g, '-') // Replaces underlines with hyphens 
            .replace(/--+/g, '-') // Replaces double hyphens with single hyphen 
            .replace(/-$/g, '') // Removes hyphens from end of string

        return new Slug(slugText) 
    }
}