import React, { useState } from 'react';
import { UnifiedModel } from '../data/unifiedModels';
import { inspectCustomModel } from '../engine/huggingFaceApi';

interface ModelInspectorModalProps {
    isOpen: boolean;
    onClose: () => void;
    onModelAdded: (model: UnifiedModel) => void;
}

export const ModelInspectorModal: React.FC<ModelInspectorModalProps> = ({
    isOpen,
    onClose,
    onModelAdded
}) => {
    const [inputUrl, setInputUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputUrl.trim()) return;

        setLoading(true);
        setError(null);

        try {
            const inspectedModel = await inspectCustomModel(inputUrl.trim());
            onModelAdded(inspectedModel);
            setInputUrl('');
            onClose();
        } catch (err) {
            setError((err as Error).message || 'Failed to inspect model. Please check the repository identifier.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-md bg-black/75 backdrop-blur-[6px]">
            <div
                role="dialog"
                aria-modal="true"
                className="w-full max-w-lg bg-surface-container-lowest border border-outline rounded p-md"
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-outline-variant pb-sm mb-md">
                    <div>
                        <span className="label-caps text-on-surface-variant block mb-0.5">CUSTOM REPOSITORY INSPECTOR</span>
                        <h2 className="title-sm text-on-surface font-semibold">Inspect Any Model</h2>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-on-surface-variant hover:text-on-surface text-lg font-mono p-1"
                        aria-label="Close modal"
                    >
                        ✕
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <p className="body-md text-on-surface-variant mb-md">
                        Enter any Hugging Face repository URL or identifier (e.g., <code className="font-mono text-xs bg-surface-container px-1 py-0.5 rounded">bartowski/Llama-3.3-70B-Instruct-GGUF</code>) or custom model name. The engine will inspect its metadata, extract parameter sizes, and evaluate memory compatibility against your detected hardware.
                    </p>

                    <div className="mb-md">
                        <label htmlFor="repoInput" className="label-caps block mb-1 text-on-surface">
                            HUGGING FACE URL OR REPOSITORY ID
                        </label>
                        <input
                            id="repoInput"
                            type="text"
                            value={inputUrl}
                            onChange={e => setInputUrl(e.target.value)}
                            placeholder="https://huggingface.co/unsloth/DeepSeek-R1-GGUF"
                            disabled={loading}
                            className="w-full bg-surface border border-outline rounded p-2 text-xs font-mono text-on-surface focus:border-primary focus:outline-none placeholder:text-outline"
                        />
                    </div>

                    {error && (
                        <div className="bg-error-container border border-error rounded p-sm text-xs text-on-error-container font-mono mb-md">
                            {error}
                        </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-end gap-sm border-t border-outline-variant pt-sm">
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={loading}
                            className="px-md py-1.5 rounded border border-outline text-xs font-mono text-on-surface hover:bg-surface-container-low"
                        >
                            CANCEL
                        </button>
                        <button
                            type="submit"
                            disabled={loading || !inputUrl.trim()}
                            className="px-md py-1.5 rounded bg-primary text-on-primary text-xs font-mono font-medium hover:bg-primary-container disabled:opacity-50"
                        >
                            {loading ? 'INSPECTING...' : 'ANALYZE & ADD MODEL'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
