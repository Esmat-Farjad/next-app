import Card from "@/components/card";
import Link from "next/link";
export default function ArchivedNotifications(){
    return (
        <Card>
            <p>Archived Notifications</p>
            <button className={"bg-teal-500 px-2 py-1 rounded text-white hover:bg-teal-600 m-3"}>
                <Link href="/dashboard">Default Notification</Link>
            </button>
        </Card>
    );
}