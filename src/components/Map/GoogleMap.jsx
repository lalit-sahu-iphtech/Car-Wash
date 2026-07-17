export default function GoogleMap(){
    return(
        <div
        className="
        w-full
        h-[250px]
        sm:h-[350px]
        md:h-[450px]
        lg:h-[500px]
        xl:h-[560px]
      "

        >
            <iframe 
            title="Google Map"
            src="https://www.google.com/maps?q=Manhattan,New%20York&output=embed" 
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}