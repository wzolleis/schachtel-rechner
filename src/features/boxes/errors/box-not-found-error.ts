export class BoxNotFoundError extends Error {
    private boxId: string

    constructor(boxId: string) {
        super(`Could not find box with id ${boxId}`);
        this.boxId = boxId
    }

    getBoxId() {
        return this.boxId
    }


}