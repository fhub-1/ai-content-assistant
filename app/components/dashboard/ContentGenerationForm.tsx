"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

type ContentType = 'blog' | 'social' | 'video' | 'podcast';

interface FormData {
  contentType: ContentType;
  description: string;
  tone: string;
  length: string;
}

export default function ContentGenerationForm() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    contentType: 'blog',
    description: '',
    tone: 'professional',
    length: 'medium',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // TODO: Implement AI generation logic
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated delay
    
    setIsGenerating(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contentType" className="text-zinc-200">Content Type</Label>
          <Select
            value={formData.contentType}
            onValueChange={(value) => setFormData({ ...formData, contentType: value as ContentType })}
          >
            <SelectTrigger className="w-full bg-zinc-800/50 border-zinc-700 text-zinc-200">
              <SelectValue placeholder="Select content type" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-800 border-zinc-700">
              <SelectItem value="blog" className="text-zinc-200 focus:bg-zinc-700 focus:text-zinc-200">Blog Post</SelectItem>
              <SelectItem value="social" className="text-zinc-200 focus:bg-zinc-700 focus:text-zinc-200">Social Media Post</SelectItem>
              <SelectItem value="video" className="text-zinc-200 focus:bg-zinc-700 focus:text-zinc-200">Video Script</SelectItem>
              <SelectItem value="podcast" className="text-zinc-200 focus:bg-zinc-700 focus:text-zinc-200">Podcast Script</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="tone" className="text-zinc-200">Tone</Label>
          <Select
            value={formData.tone}
            onValueChange={(value) => setFormData({ ...formData, tone: value })}
          >
            <SelectTrigger className="w-full bg-zinc-800/50 border-zinc-700 text-zinc-200">
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-800 border-zinc-700">
              <SelectItem value="professional" className="text-zinc-200 focus:bg-zinc-700 focus:text-zinc-200">Professional</SelectItem>
              <SelectItem value="casual" className="text-zinc-200 focus:bg-zinc-700 focus:text-zinc-200">Casual</SelectItem>
              <SelectItem value="friendly" className="text-zinc-200 focus:bg-zinc-700 focus:text-zinc-200">Friendly</SelectItem>
              <SelectItem value="humorous" className="text-zinc-200 focus:bg-zinc-700 focus:text-zinc-200">Humorous</SelectItem>
              <SelectItem value="formal" className="text-zinc-200 focus:bg-zinc-700 focus:text-zinc-200">Formal</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="length" className="text-zinc-200">Content Length</Label>
          <Select
            value={formData.length}
            onValueChange={(value) => setFormData({ ...formData, length: value })}
          >
            <SelectTrigger className="w-full bg-zinc-800/50 border-zinc-700 text-zinc-200">
              <SelectValue placeholder="Select length" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-800 border-zinc-700">
              <SelectItem value="short" className="text-zinc-200 focus:bg-zinc-700 focus:text-zinc-200">Short (~300 words)</SelectItem>
              <SelectItem value="medium" className="text-zinc-200 focus:bg-zinc-700 focus:text-zinc-200">Medium (~600 words)</SelectItem>
              <SelectItem value="long" className="text-zinc-200 focus:bg-zinc-700 focus:text-zinc-200">Long (~1000 words)</SelectItem>
              <SelectItem value="custom" className="text-zinc-200 focus:bg-zinc-700 focus:text-zinc-200">Custom Length</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="description" className="text-zinc-200">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Describe what you want to create..."
            className="min-h-[100px] bg-zinc-800/50 border-zinc-700 text-zinc-200 placeholder:text-zinc-500 resize-none"
          />
          <p className="text-sm text-zinc-400">
            Provide details about your content. The more specific you are, the better the results.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-4">
        <Button
          variant="outline"
          type="button"
          className="border-zinc-700 bg-zinc-800/50 text-zinc-200 hover:bg-zinc-700/50 hover:text-zinc-100"
        >
          Save as Template
        </Button>
        <Button
          type="submit"
          disabled={isGenerating}
          className="bg-indigo-600 text-zinc-100 hover:bg-indigo-500"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            'Generate Content'
          )}
        </Button>
      </div>
    </form>
  );
}
