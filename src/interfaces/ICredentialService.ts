export interface ICredentialService {

    /**
     * @param type credential type
     * @param email email reference
     * @param uuid uuid reference
     * @param plainCredential plaintext credential
     * @param expires expiration date
     * @returns reference of the credential
     */
    create(
        type: string,
        email: string, uuid: string,
        plainCredential: string,
        expires: Date
    ): Promise<string>;

    /**
     * @param type credential type
     * @param email email reference
     * @param uuid uuid reference
     * @param reference credential reference
     * @param plainCredential plaintext credential
     * @param expires expiration date
     */
    update(
        type: string,
        email: string, uuid: string, reference: string,
        plainCredential: string,
        expires: Date
    ): Promise<void>;

    /**
     * @param type credential type
     * @param email email reference
     * @param uuid uuid reference
     * @param reference credential reference
     */
    get(
        type: string,
        email: string, uuid: string, reference: string
    ): Promise<string | null>;

}
