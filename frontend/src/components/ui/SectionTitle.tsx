type Props = {
    title: string;
    subtitle?: string;
};

export default function SectionTitle({
    title,
    subtitle,
}: Props) {
    return (
        <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                {title}
            </h2>

            {subtitle && (
                <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
}