// src/app/api/checkdb/route.ts
import connectMongo from '@/lib/mongodb';

export async function GET() {
    try {
        await connectMongo();
        console.log("Connected to DB successfully at", new Date());
        // Using Response object to return JSON
        return new Response(JSON.stringify({ message: "Connected to MongoDB successfully!" }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        return new Response(JSON.stringify({ error: "Failed to connect to MongoDB" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}