export class Message {

    constructor(
        public type :MessageType, 
        public text :string
    ) { }
    

    public static info(text :string) :Message {
        return new Message(MessageType.INFO, text);
    }

    public static warn(text :string) :Message {
        return new Message(MessageType.WARNING, text);
    }

    public static error(text :string) :Message {
        return new Message(MessageType.ERROR, text);
    }

    public static sucess(text :string) :Message {
        return new Message(MessageType.SUCCESS, text);
    }


    private properties(): string {
        var mapa = new Map<MessageType, any>();

        mapa.set(MessageType.SUCCESS,   {cssClass: "alert-success", icon: "[SUCCESS]"});
        mapa.set(MessageType.WARNING,   {cssClass: "alert-warning", icon: "[WARNING]"});
        mapa.set(MessageType.ERROR,     {cssClass: "alert-danger",  icon: "[ERROR]"});
        mapa.set(MessageType.INFO,      {cssClass: "alert-info",    icon: "[INFO]"});

        return mapa.get(this.type);
    }
}

export enum MessageType {
    NEUTRAL,
    SUCCESS,
    WARNING,
    ERROR,
    INFO
}