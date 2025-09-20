export class BoxNotFoundError extends Error {
    private boxId: string | null = null

    constructor(boxId: string | null = null) {
        super(`Could not find box with id ${boxId}`);
        this.boxId = boxId
    }

    getBoxId() {
        return this.boxId
    }


}