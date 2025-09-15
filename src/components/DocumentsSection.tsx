import { useState } from "react";
import { FileText, Download, Upload, Eye, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { getTranslation } from "@/utils/translations";

interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadDate: string;
  category: "identity" | "travel" | "medical" | "insurance";
}

interface DocumentsSectionProps {
  currentLanguage: string;
}

const DocumentsSection = ({ currentLanguage }: DocumentsSectionProps) => {
  const t = (key: string) => getTranslation(key, currentLanguage);
  const { toast } = useToast();
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "1",
      name: "Passport.pdf",
      type: "PDF",
      size: "2.1 MB",
      uploadDate: "2025-01-10",
      category: "identity"
    },
    {
      id: "2", 
      name: "Aadhaar_Card.pdf",
      type: "PDF",
      size: "1.5 MB",
      uploadDate: "2025-01-10",
      category: "identity"
    },
    {
      id: "3",
      name: "Travel_Insurance.pdf",
      type: "PDF", 
      size: "892 KB",
      uploadDate: "2025-01-12",
      category: "insurance"
    },
    {
      id: "4",
      name: "Hotel_Booking.pdf",
      type: "PDF",
      size: "654 KB", 
      uploadDate: "2025-01-12",
      category: "travel"
    },
    {
      id: "5",
      name: "Medical_Report.pdf",
      type: "PDF",
      size: "1.2 MB",
      uploadDate: "2025-01-14",
      category: "medical"
    }
  ]);

  const categoryColors = {
    identity: "bg-blue-100 text-blue-800 border-blue-200",
    travel: "bg-green-100 text-green-800 border-green-200", 
    medical: "bg-red-100 text-red-800 border-red-200",
    insurance: "bg-purple-100 text-purple-800 border-purple-200"
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const newDoc: Document = {
        id: Date.now().toString(),
        name: file.name,
        type: file.type.includes('pdf') ? 'PDF' : file.type.toUpperCase(),
        size: (file.size / 1024 / 1024).toFixed(1) + ' MB',
        uploadDate: new Date().toISOString().split('T')[0],
        category: "travel"
      };
      
      setDocuments(prev => [newDoc, ...prev]);
      toast({
        title: "✅ Document Uploaded",
        description: `${file.name} has been securely stored.`,
      });
    }
  };

  const handleView = (doc: Document) => {
    toast({
      title: "👁️ Viewing " + doc.name,
      description: "Opening document in secure viewer...",
    });
  };

  const handleDownload = (doc: Document) => {
    toast({
      title: "⬇️ Downloading " + doc.name,
      description: "Download started...",
    });
  };

  const handleDelete = (docId: string) => {
    setDocuments(prev => prev.filter(doc => doc.id !== docId));
    toast({
      title: "🗑️ Document Deleted",
      description: "Document has been removed from secure storage.",
    });
  };

  return (
    <Card className="shadow-card">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">{t('myDocuments')}</h3>
          <div className="relative">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileUpload}
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
            />
            <Button 
              size="sm" 
              onClick={() => document.getElementById('file-upload')?.click()}
            >
              <Plus className="w-4 h-4 mr-1" />
              {t('add')}
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          {documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-muted-foreground" />
                <div>
                  <div className="font-medium text-sm">{doc.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {doc.size} • {doc.uploadDate}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Badge className={categoryColors[doc.category]}>
                  {t(doc.category)}
                </Badge>
                <Button size="sm" variant="ghost" onClick={() => handleView(doc)}>
                  <Eye className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" onClick={() => handleDownload(doc)}>
                  <Download className="w-4 h-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => handleDelete(doc.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-xs text-muted-foreground text-center">
          📱 {t('documentsEncrypted')}
        </div>
      </div>
    </Card>
  );
};

export default DocumentsSection;