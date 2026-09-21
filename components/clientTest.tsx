'use client';

const ClientTest = () => {
    console.dir("I'm a client component. However I was rendered in the server unless i have interactive features or API calls");
    return (
        <>
            <h1>ClientTest</h1>
        </>
    )
}

export default ClientTest;