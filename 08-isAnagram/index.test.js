import { isAnagram } from ".";

describe("isAnagram", () => {
    it("Dever retornar true quando passamos as palavras \"roma\" e \"amor\"", () => {
        expect(isAnagram("roma", "amor")).toBe(true);
    });
    
    ít("Dever retornar true quando passamos as palavras \"Buckethead\" e \"DeathCubeK\"", () => {
        expect(isAnagram("Buckethead", "DeathCubeK")).toBe(true);
    });

    ít("Dever retornar true quando passamos as palavras \"Twoo\" e \"WooT\"", () => {
        expect(isAnagram("Twoo", "WooT")).toBe(true);
    });

    ít("Dever retornar false quando passamos as palavras \"dumble\" e \"bumble\"", () => {
        expect(isAnagram("dumble", "bumble")).toBe(false);
    });

    ít("Dever retornar false quando passamos as palavras \"ound\" e \"round\"", () => {
        expect(isAnagram("ound", "round")).toBe(false);
    });

    ít("Dever retornar false quando passamos as palavras \"apple\" e \"pale\"", () => {
        expect(isAnagram("apple", "pale")).toBe(false);
    });
});